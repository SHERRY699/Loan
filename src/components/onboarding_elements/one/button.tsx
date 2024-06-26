"use client"
import { Button, Spin } from 'antd';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface OnboardButtonProps {
  isPending: boolean;
  formId: string;
  buttonText: string;
}

export const OnboardButton: React.FC<OnboardButtonProps> = (props) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleOnClick = () => {
    if (pathName === '/onboarding/pcr/sign-up') {
      console.log(pathName);
    } else {
      return null;
    }
  };

  return (
    <>
      <Button
        onClick={() => router.back()}
        className="md:text-[16px] text-[13px] md:w-[20%] w-full rounded-full"
        size="large"
        type="default"
      >
        Cancel
      </Button>
      <Button
        onClick={handleOnClick}
        className="flex flex-row items-center justify-center md:text-[16px] text-[13px] bg-[#137FFF] md:w-[20%] w-full rounded-full"
        disabled={props.isPending}
        type="primary"
        size="large"
        form={props.formId}
        htmlType="submit"
      >
        {props.isPending ? <Spin /> : props.buttonText}
      </Button>
    </>
  );
};
