import React from "react";

const Nav = () => {
    return (
        <nav class="navbar navbar-light bg-dark justify-content-between py-4">
        <a class="navbar-brand" style={{color:"yellow"}}>FE Task</a>
        <form class="form-inline">
        <button type="button" class="btn btn-light mr-3">info</button>
        <button type="button" class="btn btn-light ">task</button>
        </form>
      </nav>
    )
}

export default Nav
