import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function UserList() {
  const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);
  console.log(movies)

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  console.log(movies);

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 220 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/product/" + params.row._id, movie: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid rows={movies} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection getRowId={(r) => r._id} />
      <div>Hello from movie list</div>
    </div>
  );
}
