"use client"
import { CheckIcon } from "@heroicons/react/24/outline"
import React from "react"
import { BulletPoints } from "@/components/packages/modules/one/package/childs/bulletPoints"
interface NormalProps {
	imgUrl?: string
	name?: string
	fullPrice?: any
	emiPrice?: any
	validity?: number
	downPaymentAmount?: number
	intervalCount?: number
	bulletPoints?: string[]
	onClick?: () => void
}
export const Featured: React.FC<NormalProps> = (props) => {
	const numericFullValue = parseFloat(props?.fullPrice)
	const numericEmiValue = parseFloat(props?.emiPrice)
	return (
		<div
			className={
				"shadow-tremor-card ring-1 ring-gray-100 rounded-[16px] w-[400px] h-[850px] relative"
			}
		>
			<div className={"relative h-fit min-w-full"}>
				<img
					className={"rounded-t-[16px] object-fill min-w-[412px]"}
					src={props?.imgUrl || "/module/one/red.png"}
				/>
				<div className={" py-2 px-4 absolute top-0"}>
					<div
						className={
							"flex flex-row items-center justify-end w-full gap-2"
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="21"
							height="21"
							fill="none"
						>
							<path
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="m15.129 3.62262-.0613 3.31623c-.0087.455.2801 1.05876.6476 1.33001l2.1699 1.64498c1.3913 1.04996 1.1638 2.33626-.4987 2.86126l-2.8263.8837c-.4725.1488-.9712.6651-1.0937 1.1463l-.6738 2.5725c-.5337 2.03-1.8637 2.2312-2.96624.4462l-1.54-2.4937c-.28-.455-.945-.7962-1.47-.77l-2.92247.1488c-2.09125.105-2.68626-1.1025-1.32126-2.695l1.73249-2.0126c.32375-.3762.47249-1.07619.32374-1.54869l-.8837-2.82626c-.51625-1.6625.41123-2.58124 2.06498-2.03874l2.58127.84875c.4375.14 1.09373.04374 1.46123-.22751l2.69506-1.9425c1.4525-1.05 2.6162-.43748 2.5812 1.35627Zm4.0427 15.62748-2.6512-2.6512"
							/>
						</svg>
						<p className={"text-white font-medium "}>Popular</p>
					</div>
					<h3
						className={
							"uppercase text-[20px] text-white font-bold "
						}
					>
						{props?.name || "Credit Ascend Activator"}
					</h3>
					<div
						className={
							" text-white flex flex-row items-center py-4"
						}
					>
						<h2
							style={{
								display: "flex",
								lineHeight: "normal",
								alignItems: "flex-start"
							}}
							className={" align-top font-extrabold text-[50px]"}
						>
							<span
								style={{
									fontSize: "28px",
									paddingRight: "5px",
									paddingTop: "3px"
								}}
							>
								$
							</span>
							{numericFullValue || 999}
						</h2>
						<p className={"ml-3 text-base font-medium w-[185px]"}>
							One time payment saves you $200
						</p>
					</div>
					<div
						className={
							"font-bold rounded-xl bg-white w-[81px] h-[49px] flex items-center justify-center text-[36px] text-[#1380FF]"
						}
					>
						OR
					</div>
					<h4
						className={
							"font-normal text-[18px]  text-white w-[197px] mt-2"
						}
					>
						Monthly payment of{" "}
						<span className={"font-bold"}>
							${numericEmiValue || 299}
						</span>
					</h4>
				</div>
			</div>
			<div
				className={
					"border-gray-300 mt-1.5 pb-3.5 p-2 flex flex-col gap-2 items-center justify-between h-[62%]"
				}
			>
				<div
					className={
						"my-4 space-y-3.5 pl-3 pr-4 py-2 w-full h-auto overflow-auto"
					}
				>
					<BulletPoints bulletPoints={props.bulletPoints} />
				</div>
				<button
					onClick={props.onClick}
					className="relative overflow-hidden h-[59px] w-[245px] text-white font-semibold uppercase bg-gradient-to-r from-amber-400 to-amber-600 border-[1px] border-amber-400 tracking-tight transition-all duration-300"
					style={{
						boxShadow: "rgba(255, 183, 3, 0.65) 4px 6px 20px 1px",
						borderRadius: "35px 10px"
					}}
				>
					<span className="absolute inset-0 bg-gray-600 opacity-0 hover:opacity-25 transition-opacity duration-300"></span>
					<span
						style={{ fontSize: "20px", fontWeight: "600" }}
						className="relative z-10"
					>
						Choose Plan
					</span>
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					height: "40px",
					width: " 400px",
					background: "linear-gradient(to right, #FFB2C5, #FB6F92)",
					top: "50%",
					right: "-55.5%",
					transform: "rotate(90deg)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderTopLeftRadius: "20px",
					borderTopRightRadius: "20px",
					color: "#FFFFFF",
					fontSize: "20px",
					fontWeight: 700
				}}
			>
				Duration {props?.validity} days
			</div>
		</div>
	)
}
