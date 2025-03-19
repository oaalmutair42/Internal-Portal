function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="relative bg-white p-8 rounded-2xl shadow-lg w-96">
          <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
            ✕
          </button>
          <h2 className="text-xl font-semibold text-center mb-6">تسجيل الدخول</h2>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل البريد الإلكتروني"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              كلمة المرور
            </label>
            <input
              type="password"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل كلمة المرور"
            />
          </div>
  
          <div className="text-right mb-4">
            <a href="#" className="text-blue-600 text-sm">نسيت كلمة المرور؟</a>
          </div>
  
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            تسجيل الدخول
          </button>
  
          <p className="text-center text-gray-600 text-sm mt-4">
            ليس لديك حساب؟{" "}
            <a href="#" className="text-blue-600 font-medium">إنشاء الحساب</a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Login;   