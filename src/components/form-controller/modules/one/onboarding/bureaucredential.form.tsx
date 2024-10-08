"use client"
// import { Typography } from "@material-tailwind/react";
// @ts-ignore
import useForm from "new-react-use-form"
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react"
import axios from "axios"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { RadioGroup } from "@headlessui/react"
import { usePCR } from "@/context/onboarding/personal.credit.repair.context"
import { Calls } from "@/api/calls/type"
import { ApiCalls } from "@/api/calls/calls"
import toast from "react-hot-toast"
import { handleFormError } from "@/utils/error"
import { useRouter } from "next/navigation"
import { Typography, Input, Button } from "antd"
import { useMutation } from "@tanstack/react-query"
export const BureauCredentialForm = () => {
	const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

	const { Title } = Typography
	const router = useRouter()
	const {
		SetActiveTab,
		SetFormID,
		SetButtonText,
		SetIsPending,
		SetMobileH4,
		SetMobileText,
		SetMobileValue,
		ActiveTab
	} = usePCR()
	const [showPassword, setShowPassword] = React.useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}
	const form = useForm({
		report_provider: "IdentityIQ",
		email: "",
		phone_no: "",
		password: "",
		security_word: ""
	})
	// const { mutateAsync, isPending } = useMutation<
	// 	Calls.IResponse.PullReport,
	// 	Error,
	// 	Calls.IRequest.PullReport
	// >({
	// 	mutationFn: (variables) =>
	// 		ApiCalls.Module.one.bureauCredential(variables),
	// 	onSuccess: (r) => {
	// 		toast.success("Successful!")

	// 		if (r?.urlPath != null) {
	// 			router.replace(r?.urlPath)
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
		e.preventDefault()
		console.log(form.originalData)
		// await mutateAsync(form.originalData)
		await axios
			.post(`${API_BASE_URL}/provider`, form?.originalData)
			?.then((res) => {
				console.log(res)
				toast.success("Successful!")
				router?.replace("/onboarding/pcr/meeting")
			})
			?.catch((err) => {
				console.log(err)
				toast.error("Error!")
			})
	}
	useLayoutEffect(() => {
		SetActiveTab(1)
		SetFormID("pull-report")
		SetButtonText("Pull Report & Next")
		SetMobileH4("Get Credit Report")
		SetMobileText("2/6")
		SetMobileValue(40)
	}, [])
	// useEffect(() => {
	// 	if (isPending) {
	// 		SetIsPending(true)
	// 	} else {
	// 		SetIsPending(false)
	// 	}
	// }, [isPending])

	return (
		<form
			onSubmit={onSubmit}
			id={"pull-report"}
			className={
				" my-10 flex flex-col h-fit justify-center items-center  md:px-8 px-[16px] w-full"
			}
		>
			<Title
				level={4}
				className="text-center md:w-[35%] w-full capitalize font-semibold"
			>
				Complete the form below and submit credentials before proceeding
			</Title>
			<div
				className={
					"mt-6 h-fit flex flex-col justify-center items-center gap-8 md:w-[35%] w-full"
				}
			>
				<div className={"select-none w-full flex flex-row gap-8"}>
					<RadioGroup
						className={"flex flex-col gap-4 w-full"}
						value={form.report_provider}
						onChange={(value) => {
							form.set("report_provider", value)
						}}
					>
						<RadioGroup.Label
							className={
								"after:content-['*'] after:ml-0.5 after:text-red-500"
							}
						>
							Select report provider
						</RadioGroup.Label>
						<RadioGroup.Option
							className={({ active, checked }) =>
								`${
									active
										? "bg-blue-50/50  ring-2 ring-blue-700 text-blue-gray-700"
										: "bg-white text-blue-gray-700"
								}
                  ${
						checked
							? "bg-blue-50/50  ring-2 ring-blue-700 "
							: "bg-white ring-2 ring-gray-200 "
					}
                    relative flex cursor-pointer rounded-lg px-5 py-4  focus:outline-none`
							}
							value="IdentityIQ"
						>
							{({ active, checked }) => (
								<div
									className={
										"w-full flex flex-row items-center justify-between"
									}
								>
									<div
										className={
											"text-blue-gray-700 font-semibold"
										}
									>
										IdentityIQ
									</div>
									<div className={"flex flex-col items-end "}>
										<div
											className={
												"text-[13px] text-blue-gray-800"
											}
										>
											Create Account If have not
										</div>
										<div className={"text-blue-900"}>
											<a href="https://enroll.identityiq.com/?lredir=1&plancode=PLAN6XS&offercode=431270YT">
												Create
											</a>
										</div>
									</div>
								</div>
							)}
						</RadioGroup.Option>
						<RadioGroup.Option
							className={({ active, checked }) =>
								`${
									active
										? "bg-blue-50/50  ring-2 ring-blue-700 text-blue-gray-700"
										: "bg-white text-blue-gray-700"
								}
                  ${
						checked
							? "bg-blue-50/50  ring-2 ring-blue-700 "
							: "bg-white ring-2 ring-gray-200 "
					}
                    relative flex cursor-pointer rounded-lg px-5 py-4  focus:outline-none`
							}
							value="SmartCredit"
						>
							{({}) => (
								<div
									className={
										"w-full flex flex-row items-center justify-between"
									}
								>
									<div
										className={
											"text-blue-gray-700 font-semibold"
										}
									>
										Smart Credit
									</div>
									<div className={"flex flex-col items-end "}>
										<div
											className={
												"text-[13px] text-blue-gray-800"
											}
										>
											Create Account If have not
										</div>
										<div className={"text-blue-900"}>
											<a href="https://www.smartcredit.com/?PID=60610://google.com">
												Create
											</a>
										</div>
									</div>
								</div>
							)}
						</RadioGroup.Option>
					</RadioGroup>
				</div>
				<div className={"w-full"}>
					<TextField
						required={true}
						disabled={form.busy}
						value={form.email}
						onChange={(e) => {
							form.set("email", e.target.value)
							form.errors.clear("email")
						}}
						label="Username/Email"
						error={form.errors.has("email")}
						helperText={
							form.errors.has("email") && form.errors.get("email")
						}
					/>
				</div>
				<div className={"w-full"}>
					<TextField
						required={true}
						disabled={form.busy}
						value={form.phone_no}
						onChange={(e) => {
							form.set("phone_no", e.target.value)
							form.errors.clear("phone_no")
						}}
						label="Phone Number"
						error={form.errors.has("phone_no")}
						helperText={
							form.errors.has("phone_no") &&
							form.errors.get("phone_no")
						}
					/>
				</div>
				<div className={"w-full"}>
					<TextField
						required={true}
						disabled={form.busy}
						value={form.password}
						onChange={(e) => {
							form.set("password", e.target.value)
							form.errors.clear("password")
						}}
						label="Password"
						error={form.errors.has("password")}
						type={showPassword ? "text" : "password"}
						helperText={
							form.errors.has("password") &&
							form.errors.get("password")
						}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? (
											<Visibility />
										) : (
											<VisibilityOff />
										)}
									</IconButton>
								</InputAdornment>
							)
						}}
					/>
				</div>
				<div className={"w-full"}>
					<TextField
						disabled={form.busy}
						value={form.security_word}
						onChange={(e) => {
							form.set("security_word", e.target.value)
							form.errors.clear("security_word")
						}}
						label="Security word"
						error={form.errors.has("security_word")}
						multiline={true}
						maxRows={4}
						helperText={
							form.errors.has("security_word") &&
							form.errors.get("security_word")
						}
					/>
				</div>
			</div>
		</form>
	)
}
