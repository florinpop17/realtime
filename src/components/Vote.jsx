export default function Vote({ text, percentage, votes }) {
    return (
        <div className="votes">
            <input
                className="appearance-none"
                type="radio"
                name="vote"
                value={text}
                id={text}
            />
            <label
                htmlFor={text}
                className="bg-white block rounded border-4 border-transparent cursor-pointer shadow-lg p-6"
            >
                <p className="text-2xl font-bold flex items-center justify-between">
                    {text}
                    <span>{percentage || 0}%</span>
                </p>
                <progress
                    className="w-full h-2 mt-4 rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg"
                    value={percentage}
                    max="100"
                >
                    {percentage}%
                </progress>
                <small className="text-slate-500">{votes} votes</small>
            </label>
        </div>
    );
}
