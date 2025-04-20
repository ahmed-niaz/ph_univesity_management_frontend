import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "admin1234",
    },
  });

  const [login, { error }] = useLoginMutation();

  // console.log({ data });
  // console.log({ error });

  const onSubmit = async (data) => {
    const userCredentials = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userCredentials).unwrap();
    const user = verifyToken(res.data.accessToken);
    console.log( user );
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log("token", res.data.accessToken);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" {...register("userId")} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input type="text" {...register("password")} />
      </div>

      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
