import SignUpForm from "./SignUpForm";
const SignUp = () => {
  return (
    <div className="grid lg:grid-cols-3 h-full">
      <div
        className="col-span-2 bg-no-repeat bg-cover py-6 px-16 flex-col justify-between bg-white dark:bg-gray-800 hidden lg:flex"
        style={{
          backgroundImage: `url('/img/others/auth-cover-bg.jpg')`,
        }}
      >
        <img
          src="http://localhost:3000/img/logo/logo-dark-full.png"
          alt=""
          className="w-[130px]"
        />
        <div>
          <h3 className="text-white mb-4">
            Jump start your project with Elstar
          </h3>
          <p className="text-lg text-white opacity-80 max-w-[700px]">
            Elstar comes with a complete set of UI components crafted with
            Tailwind CSS, it fulfilled most of the use case to create modern and
            beautiful UI and application
          </p>
        </div>
        <span className="text-white">
          Copyright &copy; {`${new Date().getFullYear()}`}{" "}
          <span className="font-semibold">NVB</span>{" "}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center bg-white">
        <div className="xl:min-w-[450px] px-8">
          <div className="mb-8">
            <h3 className="mb-1">Sign Up</h3>
            <p>And lets get started with your free trial</p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
