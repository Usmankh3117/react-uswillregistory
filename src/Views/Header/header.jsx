import Image from "../Common/Components/image";

export default function Header(props) {
    return <section className="header-section">
        <div className="icondiv">
            <div className="header-right-img">
                <Image name="round-logo-2.png" alt="" />
            </div>

            <div className="header-top-part">
                <div className="container">
                    <div className="upper-header">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <Image name="TheUSWillRegistry.png" alt="logo" className="logo-img" />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-6">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="header-lower-part">
                <div className="container">
                    <div className="lower-header">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <a href="#" className="top-menu active-menu">Home</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">Contact us Pages</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">About Us</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">Site Map</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">Dictionary</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">Terms of Service</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">Privacy Notice</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">For Non Profit</a>
                            </li>
                            <li className="list-group-item">
                                <a href="#" className="top-menu">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
}