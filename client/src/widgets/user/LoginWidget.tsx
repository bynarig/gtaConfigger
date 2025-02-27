import InputValidation from '#/shared/ui/InputValidation';
import Button from '#/shared/ui/Button';
import LoginWithGoogle from '#/features/LoginWithGoogle';
import LoginWithApple from '#/features/LoginWithApple';

export default function LoginWidget() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center text-6xl mb-16"><h1>Login</h1></div>
          <InputValidation type="email" />
          <InputValidation type="password" />
          <Button name="Register" type="submit" />
          <LoginWithGoogle/>
          <LoginWithApple/>
        </div>
      </form>
    </div>
  );
}