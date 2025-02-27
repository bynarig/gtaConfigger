import InputValidation from '#/shared/ui/InputValidation';
import Button from '#/shared/ui/Button';
import Input from '#/shared/ui/Input';
import LoginWithGoogle from '#/features/LoginWithGoogle';
import LoginWithApple from '#/features/LoginWithApple';

export default function RegisterWidget() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center text-6xl mb-16"><h1>Registration</h1></div>
          <InputValidation type="email" />
          <Input placeholder="Username"/>
          <InputValidation type="password" />
          <Button name="Register" type="submit" />
          <LoginWithGoogle/>
          <LoginWithApple/>
        </div>
      </form>
    </div>
  );
}