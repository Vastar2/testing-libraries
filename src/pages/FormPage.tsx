import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const schema = z.object({
  name: z.string().min(2),
  birth: z.string().min(2),
  occupation: z.string().min(2),
  breakfast: z.boolean(),
});

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState(() => {
    const storedCount = localStorage.getItem("data");
    return storedCount ? JSON.parse(storedCount) : null;
  });

  const success = () => toast.success("Data added");
  const error = () => toast.error("Min 2 symbols");

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(data));
  }, [data]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    try {
      const validatedData = schema.parse(data);
      setData({
        name: validatedData.name,
        birth: validatedData.birth,
        occupation: validatedData.occupation,
        breakfast: validatedData.breakfast,
        registrationDate: dayjs().format("MMMM DD, YYYY"),
      });
      success();
    } catch (e) {
      error();
    }
  };

  return (
    <>
      <Helmet>
        <title>Form</title>
      </Helmet>
      <div className="flex justify-center gap-4 pt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-2">
            <p className="mb-1">Name</p>
            <input
              className="input-main mb-0"
              {...register("name", { required: true })}
              type="text"
              id="name"
            />
            <div className="h-4">
              {errors.name && (
                <span className="text-sm text-red-300">
                  This field is required
                </span>
              )}
            </div>
          </label>
          <label className="block mb-2">
            <p className="mb-1">Birth</p>
            <input
              className="input-main mb-0"
              {...register("birth", { required: true })}
              type="date"
              id="birth"
            />
            <div className="h-4">
              {errors.birth && (
                <span className="text-sm text-red-300">
                  This field is required
                </span>
              )}
            </div>
          </label>
          <label className="block mb-2">
            <p className="mb-1">Occupation</p>
            <input
              className="input-main mb-0"
              {...register("occupation", { required: true })}
              type="text"
              id="Occupation"
            />
            <div className="h-4">
              {errors.occupation && (
                <span className="text-sm text-red-300">
                  This field is required
                </span>
              )}
            </div>
          </label>
          <label className="flex items-center gap-2 mb-4">
            <input {...register("breakfast")} type="checkbox" id="breakfast" />
            <p>Had breakfast today</p>
          </label>
          <button className="button-main" type="submit">
            Go
          </button>
        </form>
        <div className="container-main w-80">
          {data ? (
            <>
              <p>
                <b> Name:</b> {data.name}
              </p>
              <p>
                <b> Birth:</b> {dayjs(data.birth).format("MMMM DD, YYYY")}
              </p>
              <p>
                <b> Occupation:</b> {data.occupation}
              </p>
              <p>
                <b> Had breakfast today:</b> {data.breakfast ? "Yes" : "No"}
              </p>
              <p>
                <b> Registration date:</b> {data.registrationDate}
              </p>
            </>
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FormPage;
