"use client";
// @ts-ignore
import useForm from "new-react-use-form";
import { Checkbox, Button, Typography } from "antd";
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { useMutation } from "@tanstack/react-query";
import { ApiCalls } from "@/api/calls/calls";
import { Calls } from "@/api/calls/type";
import Autocomplete from "@mui/material/Autocomplete";
import { states } from "@/data/ states";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { usePCR } from "@/context/onboarding/personal.credit.repair.context";
import { handleFormError } from "@/utils/error";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/guard/guard.context";
import axios from "axios";
interface Option {
  label: string;
}
export const SignUpForm = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const router = useRouter();
  const { setIsSignIn } = useAuth();
  // const link = window.localStorage.getItem("lastPageUrl") || "/";
  const link = Cookies.get("lastPageUrl") || "/";
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const form = useForm({
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    ss_number: "",
    city: "",
    zip_code: "",
    state: "",
    email: "",
    phone: "",
    password: "",
    cnfPassword: "",
    policy: false,
  });

  // const { mutateAsync, isPending } = useMutation<
  // 	Calls.IResponse.ModulesSignUp,
  // 	Error,
  // 	Calls.IRequest.ModuleOneSignUp
  // >({
  // 	mutationFn: (variables) => ApiCalls.Module.one.signUp(variables),
  // 	onSuccess: (r) => {
  // 		toast.success(r.msg)
  // 		Cookies.set("accessToken", r.accessToken, {
  // 			expires: 7,
  // 			path: "/",
  // 			secure: false
  // 		})
  // 		Cookies.set("refreshToken", r.refreshToken, {
  // 			expires: 30,
  // 			path: "/",
  // 			secure: false
  // 		})
  // 		Cookies.set("role", r.role)
  // 		if (r?.urlPath != null) {
  // 			router.replace(link)
  // 		}
  // 		if (r?.Success) {
  // 			setIsSignIn(true)
  // 		}
  // 	},
  // 	onError: (e) => {
  // 		// handleFormError(e as any, form);
  // 		const error = handleFormError(e as any, form)
  // 		// @ts-ignore
  // 		toast.error(error?.message)
  // 	}
  // })
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // console.log(form.originalData)
    // await mutateAsync(form.originalData)
    await axios
      .post(`${API_BASE_URL}/auth/register`, form?.originalData)
      ?.then((res) => {
        console.log(res);
        router.push("/authentication/sign-in");
      })
      ?.catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={onSubmit}
      id={"sign-up"}
      className={"mt-4 mb-10 flex flex-col gap-6"}
    >
      <div
        className={
          "mt-6 h-fit flex flex-col justify-center items-center gap-8  w-full"
        }
      >
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.first_name}
            onChange={(e) => {
              form.set("first_name", e.target.value);
              form.errors.clear("first_name");
            }}
            label="First Name"
            error={form.errors.has("first_name")}
            helperText={
              form.errors.has("first_name") && form.errors.get("first_name")
            }
          />
        </div>
        <div className={"w-full"}>
          <TextField
            required={true}
            disabled={form.busy}
            value={form.last_name}
            onChange={(e) => {
              form.set("last_name", e.target.value);
              form.errors.clear("last_name");
            }}
            label="Last Name"
            error={form.errors.has("last_name")}
            helperText={
              form.errors.has("last_name") && form.errors.get("last_name")
            }
          />
        </div>
        <div className={"flex flex-row gap-4 w-full"}>
          <div className={"w-full"}>
            <TextField
              select={true}
              required={true}
              disabled={form.busy}
              value={form.gender}
              onChange={(e) => {
                form.set("gender", e.target.value);
                form.errors.clear("gender");
              }}
              label="Gender"
              error={form.errors.has("gender")}
              helperText={
                form.errors.has("gender") && form.errors.get("gender")
              }
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </TextField>
          </div>
          <div className={"w-full"}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label={"Date of Birth"}
                disabled={false}
                defaultValue={null}
                disableFuture={true}
                onChange={(e) => {
                  // @ts-ignore
                  form.set("dob", e.toString());
                  form.errors.clear("dob");
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    required: true,
                    error: form.errors.has("dob"),
                    helperText:
                      form.errors.has("dob") && form.errors.get("dob"),
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.email}
              onChange={(e) => {
                form.set("email", e.target.value);
                form.errors.clear("email");
              }}
              label="Email Address"
              error={form.errors.has("email")}
              helperText={form.errors.has("email") && form.errors.get("email")}
            />
          </div>
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.phone}
              onChange={(e) => {
                form.set("phone", e.target.value);
                form.errors.clear("phone");
              }}
              label="Phone Number"
              error={form.errors.has("phone")}
              helperText={form.errors.has("phone") && form.errors.get("phone")}
            />
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.password}
              onChange={(e) => {
                form.set("password", e.target.value);
                form.errors.clear("password");
              }}
              label="Password"
              error={form.errors.has("password")}
              helperText={
                form.errors.has("password") && form.errors.get("password")
              }
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.cnfPassword}
              onChange={(e) => {
                form.set("cnfPassword", e.target.value);
                form.errors.clear("cnfPassword");
              }}
              label="Confirm Password"
              error={form.errors.has("cnfPassword")}
              helperText={
                form.errors.has("cnfPassword") && form.errors.get("cnfPassword")
              }
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.ss_number}
              onChange={(e) => {
                form.set("ss_number", e.target.value);
                form.errors.clear("ss_number");
              }}
              label="SS Number"
              error={form.errors.has("ss_number")}
              helperText={
                form.errors.has("ss_number") && form.errors.get("ss_number")
              }
            />
          </div>
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.city}
              onChange={(e) => {
                form.set("city", e.target.value);
                form.errors.clear("city");
              }}
              label="City Name"
              error={form.errors.has("city")}
              helperText={form.errors.has("city") && form.errors.get("city")}
            />
          </div>
        </div>
        <div
          className={
            "w-full flex md:flex-row flex-col justify-center items-center gap-8  md:gap-x-4 h-full"
          }
        >
          <div className={"w-full"}>
            <TextField
              required={true}
              disabled={form.busy}
              value={form.zip_code}
              onChange={(e) => {
                form.set("zip_code", e.target.value);
                form.errors.clear("zip_code");
              }}
              label="Zip Code"
              error={form.errors.has("zip_code")}
              helperText={
                form.errors.has("zip_code") && form.errors.get("zip_code")
              }
            />
          </div>
          <div className={"w-full"}>
            <Autocomplete
              disableClearable
              defaultValue={null}
              options={states}
              onChange={(e, value) => {
                form.set("state", value?.label);
                form.errors.clear("state");
              }}
              value={form.state}
              renderInput={(params) => (
                <TextField
                  autoComplete={"false"}
                  {...params}
                  label={"State Name"}
                  required={true}
                  disabled={form.busy}
                  error={form.errors.has("state")}
                  helperText={
                    form.errors.has("state") && form.errors.get("state")
                  }
                />
              )}
            />
          </div>
        </div>

        <div className={"w-full"}>
          <Checkbox
            checked={form.policy}
            onChange={(e) => {
              form.set("policy", e.target.checked);
              form.errors.clear("policy");
            }}
          >
            <Typography.Text type="secondary">
              I agree to terms and conditions.
            </Typography.Text>
          </Checkbox>

          {/* Ant Design Button */}
          <Button
            className="rounded-full"
            // disabled={isPending || form.busy}
            type="primary"
            size="large"
            htmlType="submit"
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </form>
  );
};

export function SignUp(variables: Calls.IRequest.SignUp): any {
  throw new Error("Function not implemented.");
}
