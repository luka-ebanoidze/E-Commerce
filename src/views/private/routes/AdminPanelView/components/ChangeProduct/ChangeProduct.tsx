import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function ChangeProduct(props: any) {
  const { setClicked } = props;

  const [id, setId] = useState("");

  const [displaytitle, setDisplayTitle] = useState(false);
  const [displaydesc, setDisplayDesc] = useState(false);
  const [displayprice, setDisplayPrice] = useState(false);

  type TLoginForm = {
    title: string;
    description: string;
    price: number;
  };

  const {
    register,
    handleSubmit,
    // setError,
    // formState: { errors },
  } = useForm<TLoginForm>();

  async function changeProduct(data: TLoginForm) {

    try {
      await axios.put(`http://localhost:3001/products/${id}`, data, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg0ZDJlMjZhLTI2MzAtNDcyNS1hMDFkLTNiODI0YTZkNDc0MiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY4NzcyNjY0NSwiZXhwIjoxNjg3ODEzMDQ1fQ.5Y2kyLbzG1jYfqf5xiJBY4p0WQj5lZPnrf7HYKkbRUM`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full bg-orange-300 flex flex-col gap-5 justify-between">
      <div className="flex gap-5">
        <div className="flex gap-3">
          <label htmlFor="title">title</label>
          <input
            type="checkbox"
            onChange={() => setDisplayTitle(!displaytitle)}
            name="title"
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="desc">desc</label>
          <input
            type="checkbox"
            onChange={() => setDisplayDesc(!displaydesc)}
            name="desc"
          />
        </div>
        <div className="flex gap-3">
          <label htmlFor="price">price</label>
          <input
            type="checkbox"
            onChange={() => setDisplayPrice(!displayprice)}
            name="price"
          />
        </div>
      </div>
      {/* setClicked(false); formis onsubmitshi */}
      <form action="#" onSubmit={handleSubmit(changeProduct)}>
        <div>
          <div>
            <p>Id</p>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              name="id"
              id="id"
            />
          </div>
          {displaytitle && (
            <div>
              <p>Title</p>
              <input
                {...register("title", { required: true })}
                type="text"
                name="title"
                id="title"
              />
            </div>
          )}
          {displaydesc && (
            <div>
              <p>Description</p>
              <input
                {...register("description", { required: true })}
                type="text"
                name="description"
                id="description"
              />
            </div>
          )}
          {displayprice && (
            <div>
              <p>Price</p>
              <input
                type="number"
                {...register("price",{valueAsNumber: true, required: true })}
                name="price"
                id="price"
              />
            </div>
          )}
        </div>
        <button type="submit">Change</button>
      </form>
    </div>
  );
}
