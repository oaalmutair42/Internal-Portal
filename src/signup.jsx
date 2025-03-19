function Signup() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-50">
        <div className="relative bg-white p-8 rounded-2xl shadow-lg w-96">
          {/* Close button */}
          <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
            ✕
          </button>
  
          {/* Title */}
          <h2 className="text-xl font-semibold text-center mb-6">إنشاء حساب</h2>
  
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">الاسم كامل</label>
            <input
              type="text"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل الاسم كامل"
            />
          </div>
  
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
            <input
              type="email"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل البريد الإلكتروني"
            />
          </div>
  
          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">كلمة المرور</label>
            <input
              type="password"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="أدخل كلمة المرور"
            />
          </div>
  
          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">تأكيد كلمة المرور</label>
            <input
              type="password"
              className="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-600 focus:ring-2 focus:ring-blue-500"
              placeholder="أعد إدخال كلمة المرور"
            />
          </div>
  
          {/* Sign Up Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            تسجيل
          </button>
  
          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            لديك حساب؟{" "}
            <a href="#" className="text-blue-600 font-medium">تسجيل الدخول</a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Signup;