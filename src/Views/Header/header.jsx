import Image from "../Common/Components/image";

export default function Header(props) {
    return <section class="header-section">
        <div class="header-top-part">
            <div class="container">
                <div class="upper-header">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <Image  name="header-logo-a.png" alt="logo" class="logo-img" />
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="header-lower-part">
            <div class="container">
                <div class="lower-header">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <a href="#" class="top-menu active-menu">Home</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">Contact us Pages</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">About Us</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">Site Map</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">Dictionary</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">Terms of Service</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">Privacy Notice</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">For Non Profit</a>
                        </li>
                        <li class="list-group-item">
                            <a href="#" class="top-menu">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header-right-img">
            <Image  name="header-logo.png" alt="" />
        </div>
    </section>
}