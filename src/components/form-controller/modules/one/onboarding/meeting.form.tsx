"use client"
import React, { FormEventHandler, useEffect, useLayoutEffect } from "react"
import Iframe from "react-iframe"
import { useRouter } from "next/navigation"
import { usePCR } from "@/context/onboarding/personal.credit.repair.context"
import { useMutation } from "@tanstack/react-query"
import { ApiCalls } from "@/api/calls/calls"
import toast from "react-hot-toast"
export const MeetingFrom = () => {
	const router = useRouter()
	const {
		SetActiveTab,
		SetFormID,
		SetButtonText,
		SetIsPending,
		SetMobileH4,
		SetMobileText,
		SetMobileValue
	} = usePCR()

	// const { mutateAsync, isPending } = useMutation({
	// 	mutationFn: () => ApiCalls.Module.one.meeting(),
	// 	onSuccess: (r) => {
	// 		toast.success(r.msg)
	// 		if (r?.urlPath != null) {
	// 			router.replace(r?.urlPath)
	// 		}
	// 	},
	// 	onError: (e) => {
	// 		toast.error(e?.message)
	// 	}
	// })
	const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault()
		// await mutateAsync()
		router.replace("/onboarding/pcr/plans")
	}
	useLayoutEffect(() => {
		SetActiveTab(2)
		SetFormID("meeting")
		SetButtonText("Next")
		SetMobileH4("Schedule a meeting")
		SetMobileText("3/6")
		SetMobileValue(60)
	}, [])
	// useEffect(() => {
	// 	if (isPending) {
	// 		SetIsPending(true)
	// 	} else {
	// 		SetIsPending(false)
	// 	}
	// }, [isPending])
	return (
		<form id={"meeting"} onSubmit={onSubmit}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "66px"
				}}
			>
				<p
					style={{
						width: "390px"
					}}
				>
					Please Schedule an Appointment First with our Sales Team
					Before Purchasing one of our Subscriptions
				</p>
			</div>

			<div
				className={
					"bg-white md:p-0  pb-14 w-full flex flex-row items-center justify-center h-screen"
				}
			>
				<Iframe
					url="https://calendly.com/tgiscaleme"
					className={
						"overflow-hidden bg-white h-full md:w-full w-full"
					}
					loading={"auto"}
					display="block"
					position="relative"
				/>
			</div>
		</form>
	)
}
