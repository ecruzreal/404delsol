import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const mediasets = {
    "show-1": [
        "IMG_6150.jpeg", "IMG_6151.jpeg", "IMG_6152.jpeg",
         "IMG_6153.jpeg", "IMG_6154.jpeg", "IMG_6155.jpeg",
          "IMG_6156.jpeg", "IMG_6157.jpeg", "IMG_6158.jpeg"
    ],
    "show-2": [
        "IMG_6159.jpeg", "IMG_6160.jpeg", "IMG_6161.jpeg",
        "IMG_6162.jpeg", "IMG_6163.jpeg", "IMG_6164.jpeg",
        "IMG_6165.jpeg"
    ],
    "show-3": [],
    "show-4": [
        "IMG_1121.JPG", "IMG_1131.JPG", "IMG_1132.JPG",
        "IMG_1133.JPG", "IMG_1135.JPG", "IMG_1136.JPG",
        "IMG_1139.JPG", "IMG_1144.JPG", "IMG_1125.JPG",
        "IMG_6175.jpeg", "IMG_6176.jpeg", "IMG_6178.jpeg"
    ],
    "show-5": [
        "2-DSC_1319.jpg", "4-DSC_1326.jpg", "5-DSC_1331.jpg",
        "6-DSC_1342.jpg", "7-DSC_1343.jpg", "8-DSC_1345.jpg",
        "9-DSC_1346.jpg", "10-DSC_1348.jpg", "11-DSC_1350.jpg",
        "12-DSC_1360.jpg", "13-DSC_1361.jpg", "14-DSC_1367.jpg",
        "15-DSC_1374.jpg", "16-DSC_1376.jpg", "17-DSC_1387.jpg",
        "18-DSC_1388.jpg", "19-DSC_1389.jpg", "20-DSC_1397.jpg",
        "21-DSC_1398.jpg", "22-IMG_2317.jpg", "23-IMG_2333.jpg",
        "24-IMG_2340.jpg", "25-IMG_2349.jpg", "26-IMG_2374.jpg",
        "27-IMG_2383.jpg", "28-IMG_2395.jpg", "29-IMG_2409.jpg",
        "30-IMG_2446.jpg", "31-IMG_2447.jpg", "32-IMG_2497.jpg",
        "33-IMG_2499.jpg", "34-IMG_2509.jpg", "35-IMG_2573.jpg",
        "36-IMG_2585.jpg", "37-IMG_2588.jpg"
    ]
};

const fallbackimage = "/images/petermic.png"

function Archive() {
    const {archiveID} = useParams();
    const media = mediasets[archiveID] || [];


    return (
        <div className="archive-body">
            <div className="archive-content">
                <nav className="archive-nav">
                    <Link className="archive-link" to="/archive/show-1">SHOW 1</Link>
                    <Link className="archive-link" to="/archive/show-2">SHOW 2</Link>
                    <Link className="archive-link" to="/archive/show-3">SHOW 3</Link>
                    <Link className="archive-link" to="/archive/show-4">SHOW 4</Link>
                    <Link className="archive-link" to="/archive/show-5">SHOW 5</Link>
                </nav>
                <h2 className="archive-header">{archiveID.replace('-', ' ').replace('show', 'SHOW')} ARCHIVE</h2>
                <div className={media.length > 0 ? "archive-grid" : "archive-fallback"}>
                    {media.length > 0 ? (
                        media.map((src, i) => (
                        <div key={i} className="archive-img-wrapper">
                            <img src={`/images/${src}`} className="archive-img" alt={`Media ${i}`} />
                        </div>
                        ))
                        ) : (
                        <div className="fallback">
                            <img src={fallbackimage} className="archive-img" alt="No media available" />
                            <p className="fallback-text">Nothing to see here, for now..</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Archive;