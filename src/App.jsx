import { useState, useEffect } from "react";
import { client, databases, DB_ID, COLLECTION_ID } from "./lib/appwrite";
import Question from "./components/Question";

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestionsFromDB();

        const unsubscribe = client.subscribe(
            `databases.${DB_ID}.collections.${COLLECTION_ID}.documents`,
            (res) => {
                console.log(res);

                if (
                    res.events.includes(
                        "databases.*.collections.*.documents.*.update"
                    )
                ) {
                    setQuestions((prevQuestions) => {
                        return prevQuestions.map((question) => {
                            if (question.$id !== res.payload.$id) {
                                return question;
                            }

                            return res.payload;
                        });
                    });

                    console.log("Updated Question");
                }
            }
        );

        return () => {
            unsubscribe();
        };
    }, []);

    async function getQuestionsFromDB() {
        const questions = await databases.listDocuments(DB_ID, COLLECTION_ID);
        setQuestions(questions.documents);
    }

    return (
        <main className="container max-w-3xl mx-auto px-4 py-10">
            {questions.map((question) => (
                <Question key={question.$id} data={question} />
            ))}
        </main>
    );
}

export default App;
