import React, { useRef, useEffect } from "react";
import styled from "react-emotion";
import AMapLoader from "@amap/amap-jsapi-loader";

const Map: React.FC = () => {
    let map: any = useRef(null);
    useEffect(() => {
        const mapOptions = {
            key: "5c0edc01260ad6a8dcdd8c47b29b2d46", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            AMapUI: {
                // 是否加载 AMapUI，缺省不加载
                version: "1.1", // AMapUI 缺省 1.1
                plugins: [], // 需要加载的 AMapUI ui插件
            },
            Loca: {
                // 是否加载 Loca， 缺省不加载
                version: "1.3.2", // Loca 版本，缺省 1.3.2
            },
        };
        AMapLoader.load(mapOptions)
            .then((AMap) => {
                map.current = new AMap.Map("container");
                map.current.setMapStyle(
                    "amap://styles/d3cef26c359ae8aa847d5d270449792b"
                );
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Container>
            <div id="container"></div>
        </Container>
    );
};

export default Map;

const Container = styled("div")`
    position: absolute;
    top: 50px;
    left: 120px;
    right: 50px;
    bottom: 0;

    & #container {
        width: 100%;
        height: 100%;
    }

    /* 隐藏高德logo */
    .amap-logo {
        display: none !important;
    }
`;
