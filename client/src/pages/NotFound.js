import React from "react";

const NotFound = () => {
  return (
    <main className="text-center">
      <div >
        <h1 class="text-center display-2">404</h1>
        <h2 className="my-5 text-success display-3">Uh oh, looks like you're lost!</h2>
        {/* <h2 class="h2">...this page is unavailable</h2> */}

        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="col-12 text-center">
                <div class="four_zero_four_bg">
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default NotFound;

