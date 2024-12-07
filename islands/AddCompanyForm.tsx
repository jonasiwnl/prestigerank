import { useState } from "preact/hooks";

export const AddCompanyForm = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");

  const onSubmit = (token) => {
    if (!name || !website) {
      return;
    }

    fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        website,
        token,
      }),
    });
  };

  return (
    <>
      <div>
        <p>Are we missing a company? Fill out this form:</p>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e!.target!.value)}
          />
        </label>
        <label>
          Website
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e!.target!.value)}
          />
        </label>
        <button
          class="g-recaptcha"
          data-sitekey="reCAPTCHA_site_key"
          onClick={onSubmit}
          data-action="submit"
        >
          Request to Add
        </button>
      </div>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </>
  );
};
