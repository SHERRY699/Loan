"use client"
// @ts-ignore

import React, { useState, useEffect } from "react"
import axios from "axios"
import { MoreOutlined } from "@ant-design/icons"
import { MenuOutlined } from "@ant-design/icons"
import { HolderOutlined } from "@ant-design/icons"
import { EditOutlined } from "@ant-design/icons"

export const AddClientOptionTwoForm = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		;(async () => {
			await axios
				.get("http://54.87.77.177:3001/user")
				?.then((res) => {
					console.log(res)
					setUsers(res?.data)
				})
				?.catch((err) => {
					console.log(err)
				})
		})()
	}, [])

	return (
		<>
			<h1 className="text-[40px] md:text-[50px] lg:text-[65px] ml-10 xl:ml-0 mt-4 font-bold text-[#686666]">
				Current Users
			</h1>
			<section className=" min-h-screen flex flex-col ml-4 items-start">
				<div className="buttons w-full h-[100px] flex items-center justify-between ">
					<div className="1 w-[50%] h-full flex items-center gap-6">
						<button className="w-[150px] h-[45px] bg-[#EFF6FF] text-[#1380FF] font-bold flex items-center gap-2 px-4">
							{" "}
							<span className="text-white bg-[#1380FF] rounded-full font-bold px-1 py-[1px]">
								12
							</span>{" "}
							ACTIVE
						</button>
						<button className="w-[180px] h-[45px]  text-[#8A8D93] font-bold border-[1px] border-gray-200 flex items-center gap-2 px-4 rounded-lg">
							{" "}
							<span className="text-black bg-[#E9E9E9] font-bold rounded-full px-1 py-[1px]">
								6
							</span>{" "}
							INACTIVE
						</button>
					</div>
					<div className="2  w-[50%] h-full flex items-center  justify-end  md:justify-center ">
						<div className="w-full h-full hidden md:flex items-center justify-center gap-4">
							<input
								type="text"
								placeholder="Search By Name"
								className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"
							/>
							<button className="bg-[#2684FF] text-white w-[140px] h-[40px] rounded-lg">
								Add New User
							</button>
							<button className="text-[#3A3541] text-xl">
								<MoreOutlined />
							</button>
						</div>
						<button className="md:hidden sm:mr-10">
							<MenuOutlined />
						</button>
					</div>
				</div>

				<div
					className={`hidden bg-gray-200 rounded-lg top-36 gap-4 right-1 w-[300px] h-max py-2 flex-col items-center justify-center`}
				>
					<input
						type="text"
						placeholder="Search By Name"
						className="w-[250px] h-[40px] px-2 rounded-lg outline-none border-[1px]"
					/>
					<button className="bg-[#2684FF] text-white w-[140px] h-[40px] rounded-lg">
						Add New User
					</button>
					<button className="text-[#3A3541] text-xl">
						<MoreOutlined />
					</button>
				</div>

				<div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] xl:w-full h-[800px] overflow-x-auto overflow-y-auto">
					<div className="w-[1200px] xl:w-[95%]  border-[1px] h-[800px]  ">
						<div className="w-full h-12 bg-[#F4F4F4] rounded-2xl">
							<div className="w-full h-full flex items-center rounded-xl text-left px-2 text-[8px] xl:text-[10px] text-[#333333] overflow-y-auto ">
								<div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 gap-6 flex items-center justify-center">
									<input
										type="checkbox"
										name="chck"
										id="check"
									/>
									<p>USERS</p>
								</div>
								<div className="w-[13%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>EMAIL</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>PASSWORDS</p>
								</div>
								<div className="w-[12%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>PHONE NUMBER</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>CITY</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>STATE</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>ZIP CODE</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>SS NUMBER</p>
								</div>
								<div className="w-[10%] h-[12px] border-r-2 border-l-2 border-gray-500 flex items-center justify-center">
									<p>ACTION REQUIRED</p>
								</div>
							</div>
						</div>

						<div className="w-full  h-12 flex flex-col">
							{users?.map((item, key) => {
								return (
									<div
										className="w-full h-full relative flex items-center  text-left px-2 text-[8px] xl:text-[10px] text-[#737373] border-b-[1px] border-[#737373]"
										key={key}
									>
										<div className="w-[13%] flex flex-row items-center gap-3 justify-start">
											<input
												type="checkbox"
												name="check"
												id="check"
											/>
											<p>
												{item?.firstName}{" "}
												{item?.lastName}
											</p>
										</div>
										<p className="w-[13%] truncate">
											{item?.email}
										</p>
										<p className="w-[10%] truncate">
											{item?.password}
										</p>
										<p className="w-[12%] truncate text-center">
											{item?.phoneNumber}
										</p>
										<p className="w-[10%] truncate text-center">
											{item?.city}
										</p>
										<p className="w-[10%] truncate text-center">
											{item?.state}
										</p>
										<p className="w-[10%] truncate text-center">
											{item?.zip_code}
										</p>
										<p className="w-[10%] truncate text-center">
											{item?.ss_number}
										</p>
										<div className="w-[10%] flex items-center justify-center text-lg gap-6">
											<button>
												<EditOutlined />
											</button>
											<button>
												<HolderOutlined />
											</button>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
