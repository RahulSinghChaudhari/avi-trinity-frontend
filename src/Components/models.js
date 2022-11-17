
import React from 'react'

export default function Models() {
    return (
        <div>
           <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div class="drops">
                  <div class="drop drop-1"></div>
                  <div class="drop drop-2"></div>
                  <div class="drop drop-3"></div>
                  <div class="drop drop-4"></div>
                  <div class="drop drop-5"></div>
                </div>
                <div className="modal-content">
              
                <div className="modal-body">
                
               <div className='d-flex justify-content-between py-3'>
                <div></div>
               <h4 className="modal-title" id="staticBackdropLabel">Register Now</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
                
                   <form>
                    <div className='row'>
                        <div className='col-md-6 my-2'>
                          <input type="text" className="form-control" placeholder="Enter Name"/>
                        </div>
                        <div className='col-md-6 my-2'>
                          <input type="text" className="form-control" placeholder="Enter Place"/>
                        </div>
                        <div className='col-md-6 my-2'>
                          <input type="text" className="form-control" placeholder="Enter Contact No."/>
                        </div>
                        <div className='col-md-6 my-2'>
                          <input type="text" className="form-control" placeholder="Enter Email"/>
                        </div>
                        <div className='col-md-6 my-2'>
                          <input type="text" className="form-control" placeholder="Enter Name"/>
                        </div>
                        <div className='col-md-6 my-2'>
                          <input type="text" className="form-control" placeholder="Enter Name"/>
                        </div>
                        <div className='col-md-12 my-2'>
                        <textarea className='form-control' rows={3} placeholder="Enter Message here..."></textarea>
                        </div>
                        <div className='col-md-12 my-2'>
                        <input type="Submit" className='px-5' value="Submit" style={{borderRadius:"20px"}}/>
                      
                        </div>
                      

                    </div>
                   </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}