export default function Add() {
    return (
        <div>
            <p>Are we missing a company? Fill out this form:</p>
            <form action="/api/add" method="POST">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Website
                    <input type="url" name="name" required />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}
