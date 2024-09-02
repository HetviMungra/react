import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div class="footer_wrapper ">
        <div class="container px-5 px-lg-0">
            <div class="row">
                <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                    <img src="https://preview.colorlib.com/theme/josanclick/assets/img/logo/logo.png" alt="" />
                    <p class="mt-5 ps-0 company_details">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  
                </div>
                <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                    <h5>Navigation</h5>
                    <ul class="link-widget p-0">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                    <h5>Contact</h5>
                    <ul class="link-widget p-0">
                        <li><a href="#">87/A, Green lane, CA 6732</a></li>
                        <li><a href="#">Real State</a></li>
                        <li><a href="#">info@josanclick.com</a></li>
                        <li><a href="#">+10 236 327 3782</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5 mb-lg-0">
                    <h5>Subscribe Newsletter</h5>
                    <div class="form-group mb-5 gap-2">
                        <input type="email" class="form-control " placeholder="Enter Your Email Here"/>
                        <button type="submit" class="btn btn-outline-light mt-4">Subscribe</button>
                    </div>
                    <ul class="social-network d-flex align-items-center p-0">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container-fluid copyright-section">
       <center> <hr className='hr'/></center>

            <p>Copyright <a href="#">©2024</a> All Rights Reserved</p>
        </div>
    </div>
    </footer>
  )
}
