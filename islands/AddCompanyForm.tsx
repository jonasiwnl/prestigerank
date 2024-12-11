import { useState } from "preact/hooks";

export const AddCompanyForm = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [levelsUrl, setLevelsUrl] = useState("");

  const onSubmit = (_token: unknown) => {
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
        levels_url: levelsUrl,
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
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
          />
        </label>
        <label>
          Website
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite((e.target as HTMLInputElement).value)}
          />
        </label>
        <label>
          Levels.fyi URL
          <input
            type="url"
            value={website}
            onChange={(e) => setLevelsUrl((e.target as HTMLInputElement).value)}
          />
        </label>
        <button
          // class="g-recaptcha"
          // data-sitekey="reCAPTCHA_site_key"
          onClick={onSubmit}
          // data-action="submit"
        >
          Request to Add
        </button>
      </div>
      {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
    </>
  );
};
