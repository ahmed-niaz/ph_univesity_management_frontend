import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";
import PHForm from "../components/form/PHForm";
import InputForm from "../components/form/InputForm";
// import { type } from "./../types/sidebar.type";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin1234",
  //   },
  // });

  const [login] = useLoginMutation();

  // console.log({ data });
  // console.log({ error });

  /**
   * const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logged in");

    try {
      const userCredentials = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userCredentials).unwrap();
      const user = verifyToken(res.data.accessToken) as unknown as TUser;
      // console.log( user );
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("logged in successfully", { id: toastId, duration: 2000 });
      // console.log("token", res.data.accessToken);
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };
   */

  const defaultValues = {
    userId: "A-0001",
    password: "admin1234",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logged in");

    try {
      const userCredentials = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userCredentials).unwrap();
      const user = verifyToken(res.data.accessToken) as unknown as TUser;
      // console.log( user );
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("logged in successfully", { id: toastId, duration: 2000 });
      // console.log("token", res.data.accessToken);
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <InputForm type="text" name="userId" label="ID " />

        <InputForm type="password" name="password" label="Password" />

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
