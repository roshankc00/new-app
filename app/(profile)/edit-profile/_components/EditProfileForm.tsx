"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema } from "@/helpers/validation/auth/edit-profile.validation";
import { Button } from "@/components/ui/button";
import { months } from "@/helpers/common/allmonths";
import { useGetCurrentUser } from "@/hooks/react-query/auth/get-current-user";
import { updateUserProfile } from "@/common/api/auth/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { queryClient } from "@/components/providers/ReactQuery.provider";

type Props = {
  userDetails: any;
};

const EditProfileForm: React.FC<Props> = ({ userDetails }) => {
  const router = useRouter();
  const generateRange = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };
  const currentYear = new Date().getFullYear();
  const days = generateRange(1, 32);
  const years = generateRange(currentYear - 200, currentYear).reverse();

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: userDetails?.name?.split(" ")[0],
      lastName: userDetails?.name?.split(" ")[1],
      phoneNumber: userDetails?.phoneNumber || "",
      day: userDetails?.dob?.split("-")[0],
      month: userDetails?.dob?.split("-")[1],
      year: userDetails?.dob?.split("-")[2],
    },
  });
  const onSubmit = async (values: z.infer<typeof editProfileSchema>) => {
    const data = {
      name: values?.firstName + " " + values?.lastName,
      email: userDetails?.email,
      dob: `${values.day}-${values.month}-${values.year}`,
      phoneNumber: values.phoneNumber,
    };
    await updateUserProfile(data);
    toast.success("Profile updated successfully");
    queryClient.invalidateQueries({ queryKey: ["current-user"] });
    router.push("/profile");
  };

  const { data, isFetching, isLoading } = useGetCurrentUser();
  return (
    <>
      <h3 className="text-[#2d3769] text-3xl text-center font-medium my-5 mt-10">
        Edit Profile
      </h3>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg-px-8 my-10 z-0 flex justify-center">
        {" "}
        <Card className="border p-3 py-7 bg-[#bae1d6] w-full">
          <CardContent>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 "
                >
                  <div className="grid grid-cols-2 gap-5 place-content-center">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter the First Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter the Last Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                    <div className="mt-1">
                      <p className="mb-2 text-sm font-medium">Email</p>
                      <Input value={userDetails?.email} />
                    </div>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Phone phoneNumber"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <FormField
                      control={form.control}
                      name="day"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Days</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field?.value?.toString()}
                              >
                                <SelectTrigger className=" border-2 rounded-full">
                                  <SelectValue placeholder="Select Day" />
                                </SelectTrigger>
                                <SelectContent className=" border-2 border-black">
                                  {days.map((day) => (
                                    <SelectItem
                                      key={day}
                                      value={day.toString()}
                                    >
                                      {day}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="month"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Month</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field?.value?.toString()}
                              >
                                <SelectTrigger className=" border-2 rounded-full">
                                  <SelectValue placeholder="Select Month" />
                                </SelectTrigger>
                                <SelectContent className=" border-2 border-black">
                                  {months.map((month) => (
                                    <SelectItem
                                      key={month.value}
                                      value={month.value.toString()}
                                    >
                                      {month.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <>
                          <FormItem>
                            <FormLabel>Year</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field?.value?.toString()}
                              >
                                <SelectTrigger className="w-full border-2 rounded-full">
                                  <SelectValue placeholder="Select Year" />
                                </SelectTrigger>
                                <SelectContent className="w-full border-2 border-black">
                                  {years.map((year) => (
                                    <SelectItem
                                      key={year}
                                      value={year.toString()}
                                    >
                                      {year}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Save
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EditProfileForm;
