import React, { useCallback, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Form.css";


function Crud() {
  const [coc1,setCoc1] =useState(0);
  const [coc2,setCoc2] =useState(0);
  const [coc3,setCoc3] =useState(0);
  const [dataIndex, setDataIndex] = useState("");
  //   const Data = [];
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: {
      value: "",
    },

    cocktail: {
      value: "",
    },
    points: {
      value: "",
    },
  });
  console.log("data", data);

  useEffect(()=>{
    const count = data.filter((val)=>val.cocktail.value == "cocktail 1")
    let total = count.map((value)=>{ 
    return  value.points.value 
    })
    total.reduce((a, b) => a + b, 0)
    total =total.reduce((a, b) => a + b, 0)
    setCoc1(total);
  },[data]);

  useEffect(()=>{
    const count = data.filter((val)=>val.cocktail.value == "cocktail 2")
    let total = count.map((value)=>{ 
    return Number(value.points.value ) 
    })
    total.reduce((a, b) => a + b, 0)
    total =total.reduce((a, b) => a + b, 0)
    setCoc2(total);
  },[data]);

  useEffect(()=>{
    const count = data.filter((val)=>val.cocktail.value == "cocktail 3")
    let total = count.map((value)=>{ 
    return  value.points.value 
    })
    total.reduce((a, b) => a + b, 0)
    total =total.reduce((a, b) => a + b, 0)
    setCoc3(total);
  },[data]);

  const inputChangeHandler = (e, inputName) => {
    const event = e.target.value;
    const updatedForm = { ...formData };
    const updatedFormElement = { ...updatedForm[inputName] };

    updatedFormElement.value = event;

    updatedForm[inputName] = updatedFormElement;

    setFormData(updatedForm);
  };
  const onSubmitHandler = () => {
    if (
      formData.name.value == "" ||
      formData.cocktail.value == "" ||
      formData.points.value == ""
    ) {
      alert("please fill your form");
      return;
    }
    setData([...data, formData]);
    resetForm();
  };
  const resetForm = () => {
    setFormData({
      name: {
        value: "",
      },

      cocktail: {
        value: "",
      },
      points: {
        value: "",
      },
    });
  };
  const editData = (data) => {
    setEdit(true);
    console.log("edit", data);
    setFormData(data);
  };

  const deleteEntry = (index) => {
    const arr = data;
    arr.splice(index, 1);
    console.log("updated data--> ", arr);
    setData([...arr]);
  };
  const updateData = () => {
    if (
      formData.name.value == "" ||
      formData.cocktail.value == "" ||
      formData.points.value == ""
    ) {
      alert("please fill your form");
      return;
    }
    const arr = data;
    arr.splice(dataIndex, 1, formData);
    console.log("updated data--> ", arr);
    setData([...arr]);
    resetForm();
    setEdit(false)
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col-4 bg-dark  pl-3 add-entry">
          <div className="text-center my-5 py-3">
            <h1 className="text-white">ADD ENTRY</h1>
          </div>
          <div className="text-white">
            <div className="form-group text-white">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => inputChangeHandler(e, "name")}
                placeholder="Enter Name"
                value={formData.name.value}
              />
            </div>
            <div className="form-group">
              <div><label>Select Cocktail</label></div>

              <select
              style ={{width:"100%"}}
                className="form-select bg-white"
                aria-label="Default select example"
                onChange={(e) => inputChangeHandler(e, "cocktail")}
                value={formData.cocktail.value}
              >
                <option selected className="text-white">
                  select any one
                </option>
                <option value="cocktail 1">cocktail 1</option>
                <option value="cocktail 2">cocktail 2</option>
                <option value="cocktail 3">cocktail 3</option>
              </select>
            </div>
            <div className="form-group">
              <label>Points</label>
              <input
                type="number"
                className="form-control"
                max="10"
                min="0"
                value={formData.points.value}
                onChange={(e) => inputChangeHandler(e, "points")}
              />
            </div>
            {edit ? (
              <div className="text-center">
                <button className="btn btn-primary mr-3" onClick={updateData}>Update</button>
                <button onClick={() => {setEdit(false); resetForm();}} className="btn btn-primary ">
                  Cancel
                </button>
              </div>
            ) : (
              <div className="text-center">
                <button onClick={onSubmitHandler} className="btn btn-primary mr-3">
                  Add
                </button>
                <button onClick={resetForm} className="btn btn-primary ">
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="col-8 add-entry pl-5">
        <div className="bg-dark text-center "><h1  className="text-white mb-0" >Entries</h1></div>
        <div className="bg-dark row mx-0 ">
       <div className="mr-3"> <h4  className="text-white mb-0" >cocktail 1 - {coc1} </h4> </div>
       <div className="mr-3"> <h4  className="text-white mb-0" >cocktail 2 - {coc2} </h4> </div>
       <div className="mr-3"> <h4  className="text-white mb-0" >cocktail 3 - {coc3} </h4> </div>
        
        </div>
        
          <table className="table table-dark ">
            
            <thead>
              <tr>
                <th scope="col">S.no</th>

                <th scope="col">Name</th>
                <th scope="col">Cocktail</th>
                <th scope="col">Point Given</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
        
            {
              data.length != 0 ? 

              <tbody>
              {data.map((val, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{val.name.value}</td>
                    <td>{val.cocktail.value}</td>
                    <td>{val.points.value}</td>
                    <td>
                      <div className="row">
                        <button
                          className="btn bg-white mr-3"
                          onClick={() => {
                            editData(val);
                            setDataIndex(index)
                          }}
                        >
                          {" "}
                          Edit
                        </button>
                        <button
                          className="btn bg-white"
                          onClick={() => deleteEntry(index)}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>:<div className="text-center" style={{width:"540%"}}><h5 >No Data</h5></div>
            }
          </table>
        </div>
      </div>
    </div>
  );
}

export default Crud;