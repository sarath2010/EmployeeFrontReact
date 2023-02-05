import React from 'react'

const Empform = () => {
  return (
    <>
<div>
<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" >Employee App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="empform">Employee Form</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>

<div class="alert alert-dark" role="alert">
  <h3>Employee Form</h3>
</div>

<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label class="text-decoration-underline">Name</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Name"/>
    </div></div>

    <div class="form-row">
    <div class="form-group col-md-6">
      <label class="text-decoration-underline">Designation</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Designation"/>
    </div></div>
    
    <div class="form-row">
    <div class="form-group col-md-6">
      <label class="text-decoration-underline">Location </label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Location "/>
    </div></div>

    <div class="form-row">
    <div class="form-group col-md-6">
      <label class="text-decoration-underline">Salary </label>
      <input type="number" class="form-control" id="inputEmail4" placeholder="Salary "/>
    </div></div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



    </>
  )
}

export default Empform