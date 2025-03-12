import { useState } from "preact/hooks";

export function MessageBox() {
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submitMessage = async () => {
    if (message === "") {
      setError("message can't be empty.");
      setTimeout(() => setError(""), 4000);
      return;
    }

    setLoading(true);

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();

    if (response.ok) {
      setMessageSent(true);
    } else {
      setError(data.error ?? "couldn't send message.");
      setTimeout(() => setError(""), 4000);
    }

    setLoading(false);
  };

  return (
    messageSent ? <p class="font-semibold">message sent.</p> : (
      <>
        <textarea
          class="px-3 py-2 mt-10 mb-3 bg-slate-300 rounded-xl font-semibold min-h-[4vh] max-h-[50vh]"
          type={message}
          value={message}
          placeholder="leave a message..."
          maxlength={511}
          onInput={(e) => setMessage(e.currentTarget.value)}
        />
        <button
          disabled={loading}
          class="font-semibold hover:text-orange-400"
          type="submit"
          onClick={submitMessage}
        >
          {loading ? "loading..." : "send"}
        </button>
        <p class="text-red-500 font-semibold h-2">{error}</p>
      </>
    )
  );
}
