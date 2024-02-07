const LoginPwd = () => {
  return (
    <div className="mb-4">
    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      className=" bg-slate-50 w-full px-3 py-2 border text-slate-900 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      placeholder="Enter your password"
    />
  </div>
  );
};

export default LoginPwd;
