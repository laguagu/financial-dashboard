export default function LoginForm() {
  return (
    <div className="w-full">
      <form className="bg-gray-50 px-6 pb-4 pt-8">
        <div>
          <label
            className="block mb-3 text-base text-gray-900 font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mt-4">
          <label
            className="block mb-3 text-base text-gray-900 font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={4}
          />
        </div>
      </form>
    </div>
  );
}
