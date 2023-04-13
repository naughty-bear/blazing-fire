/** @jsxImportSource theme-ui */
// import bg3d from '../../public/images/blazingfire-img/3d-bg.png';
import * as PANOLENS from 'panolens';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Flex, jsx } from 'theme-ui';
import * as THREE from 'three';


// import vr3d1Bedroom_1 from 'assets/3d-img/序号1-3/1Bedroom_1.png';
// import vr3d1Bedroom_2 from 'assets/3d-img/序号1-3/1Bedroom_2.png';
// import vr3d1Bedroom_3 from 'assets/3d-img/序号1-3/1Bedroom_3.png';

// import vr3d1Bedroom_4 from 'assets/3d-img/序号4-6/1Bedroom_4.png';
// import vr3d1Bedroom_5 from 'assets/3d-img/序号4-6/1Bedroom_5.png';
// import vr3d1Bedroom_6 from 'assets/3d-img/序号4-6/1Bedroom_6.png';

// import vr3d1Bedroom_7 from 'assets/3d-img/序号7-9/1Bedroom_7.png';
// import vr3d1Bedroom_8 from 'assets/3d-img/序号7-9/1Bedroom_8.png';
// import vr3d1Bedroom_9 from 'assets/3d-img/序号7-9/1Bedroom_9.png';

const picList = [
  '/images/3d-img/序号1-3/1Bedroom_1.png',
  '/images/3d-img/序号1-3/1Bedroom_2.png',
  '/images/3d-img/序号1-3/1Bedroom_3.png',
  '/images/3d-img/序号4-6/1Bedroom_4.png',
  // '/3d-img/序号4-6/1Bedroom_5.png',
  '/images/3d-img/序号4-6/1Bedroom_6.png',
  '/images/3d-img/序号7-9/1Bedroom_7.png',
  // '/3d-img/序号7-9/1Bedroom_8.png',
  '/images/3d-img/序号7-9/1Bedroom_9.png',
];

const styles = {
  container3d: {
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    height: [250, 250, 250, 800, 880, 880],
    width: '100%',
    cursor: 'pointer',
    // overflow: 'hidden',
    padding: ['10px 10px', '121px 0'],
  },
  vrContainer: {
    overflow: 'hidden',
    height: '100%',
    position: 'relative',
    borderRadius: '10px',
  },
  controlsBarImg: {
    width: [30, 72],
    height: [30, 72],
    zIndex: 10,
  },
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    padding: [0, 0, 0, '10px 10px', '10px 10px'],
  },
  viewContainer: {
    height: '100%',
    // margin: '60px auto',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
  },
  controlsBar: {
    // width: '40%',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: [50, 100],
    img: {
      width: [24, 48],
      height: [24, 48],
      margin: [10, 20],
    },
  },
  imgContainer: {
    width: '60%',
    margin: '30px auto',
  },
  imgItem: {
    width: [30, 72],
    minWidth: [30, 72],
    height: [20, 40],
    flex: 1,
    // marginRight: 24,
    // img: {
    //   width: 144,
    //   height: 80,
    // },
  },
  widgetsHeading: {
    textAlign: 'center',
    mb: ['20px'],
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
    },
    p: {
      fontSize: '16px',
    },
  },
  heading: {
    fontFamily: 'Helvetica-Bold, Helvetica',
    textAlign: 'left',
    mb: ['20px'],
    padding: '10px',
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['18px', '18px', '18px', '24px', '24px', '24px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};

const imagePanoramaArr = [];
let viewer_main;
const Widgets = () => {
  const ref = useRef(null);
  const [zoom, setZoom] = useState(1);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  const [isShowList, setIsShowList] = useState(true);

  useEffect(() => {
    // 初始化场景
    viewer_main = new PANOLENS.Viewer({
      container: ref.current, // 传入父容器dom
      enableReticle: false,
      output: 'console',
      viewIndicator: true,
      autoRotate: false,
      autoRotateSpeed: 2,
      autoRotateActivationDuration: 5000,
      dwellTime: 1000,
      cameraFov: 60,
      autoHideInfospot: false,
    });
    // 传入官方案例的全景图片，初始化一个球形的全景
    picList.forEach((item) => {
      let temp = new PANOLENS.ImagePanorama(item);
      imagePanoramaArr.push(temp);
    });
    console.log('imagePanoramaArr :>> ', imagePanoramaArr);
    // 把全景添加到场景中
    viewer_main && viewer_main.add(...imagePanoramaArr);

    //走廊到洗衣房
    imagePanoramaArr[0].link(imagePanoramaArr[1], new THREE.Vector3(3980.38, -1951.58, -2308.44));
    //走廊到卫生间
    imagePanoramaArr[0].link(imagePanoramaArr[2], new THREE.Vector3(3066.8, -1840.88, 3486.86));

    //走廊到卧室
    imagePanoramaArr[0].link(imagePanoramaArr[3], new THREE.Vector3(4631.04, -1521.69, 1090.0));

    //走廊到客厅
    imagePanoramaArr[0].link(imagePanoramaArr[4], new THREE.Vector3(4684.16, -1622.08, -600.29));

    //洗衣房到卧室
    imagePanoramaArr[1].link(imagePanoramaArr[3], new THREE.Vector3(-551.24, -1509.47, 4730.81));

    //洗衣房到卫生间
    imagePanoramaArr[1].link(imagePanoramaArr[2], new THREE.Vector3(-4315.89, -1960.94, 1568.1));

    //卫生间到洗衣房
    imagePanoramaArr[2].link(imagePanoramaArr[1], new THREE.Vector3(-1554.56, -839.3, -4673.64));

    //卫生间到洗衣房
    imagePanoramaArr[2].link(imagePanoramaArr[4], new THREE.Vector3(374.19, -940.9, -4887.26));

    // //卫生间到走廊
    // imagePanoramaArr[2].link(
    //   imagePanoramaArr[0],
    //   new THREE.Vector3(3803.84, -2493.17, 2059.16)
    // );

    //卧室到走廊
    imagePanoramaArr[3].link(imagePanoramaArr[0], new THREE.Vector3(-3666.46, -2557.11, 2227.87));

    //卧室到客厅
    imagePanoramaArr[3].link(imagePanoramaArr[4], new THREE.Vector3(-4018.24, -2941.04, 441.76));

    // //客厅到走廊
    // imagePanoramaArr[3].link(
    //   imagePanoramaArr[0],
    //   new THREE.Vector3(-536.33, -3327.64, -3684.06)
    // );

    imagePanoramaArr[4].link(imagePanoramaArr[0], new THREE.Vector3(-2160.06, -3079.59, 3281.8));

    //客厅到室外

    imagePanoramaArr[4].link(imagePanoramaArr[6], new THREE.Vector3(4770.2, -1060.08, 1038.61));

    //客厅到厨房
    imagePanoramaArr[4].link(imagePanoramaArr[5], new THREE.Vector3(-2831.05, -1450.3, -3852.33));

    //厨房到客厅
    imagePanoramaArr[5].link(imagePanoramaArr[4], new THREE.Vector3(3027.84, -1873.61, 3502.88));

    //室外到卧室
    imagePanoramaArr[6].link(imagePanoramaArr[3], new THREE.Vector3(226.11, -798.12, -4923.42));

    //室外到客厅
    imagePanoramaArr[6].link(imagePanoramaArr[4], new THREE.Vector3(4862.82, -531.41, 1012.32));

    viewer_main.tweenControlCenter(new THREE.Vector3(4631.04, -1521.69, 1090.0), 0);
    viewer_main.outputPosition();
  }, []);

  const handleItemClick = (key, index) => {
    setCurrentActiveIndex(index);
    viewer_main && viewer_main.setPanorama(imagePanoramaArr[index]);
    viewer_main.tweenControlCenter(new THREE.Vector3(4631.04, -1521.69, 1090.0), 0);
    setZoom(1);
  };

  // PANOLENS.addEventListener('enter-fade-start', function () {
  //   viewer.tweenControlCenter(lookAtPositions[0], 0);
  // });

  return (
    <Box as="section" id="widgets" sx={styles.container3d}>
      <div sx={styles.vrContainer}>
        <div sx={styles.viewContainer} ref={ref}></div>
        <div
          sx={{
            width: '60%',
            margin: '30px auto',
            visibility: !isShowList ? 'hidden' : 'visible',
          }}
        >
          <Swiper
            spaceBetween={24}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {picList.map((pic, index) => (
              <SwiperSlide key={pic}>
                <div
                  onClick={() => {
                    handleItemClick(pic, index);
                  }}
                  className={index === currentActiveIndex ? `active_card` : ''}
                  sx={{
                    backgroundImage: `url(${'pic'})`,
                    width: [30, 72],
                    minWidth: [30, 72],
                    height: [20, 40],
                    flex: 1,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Flex sx={styles.controlsBar}>
          <img
            src='/images/blazingfire-img/icon-bar+@2x.png'
            alt="widgets"
            sx={styles.controlsBarImg}
            onClick={() => {
              const fov = (zoom + 1) * 30;
              setZoom(zoom + 1);
              viewer_main && viewer_main.setCameraFov(fov);
            }}
          />
          <img
            src='images/blazingfire-img/icon-bar-@2x.png'
            alt="widgets"
            sx={styles.controlsBarImg}
            onClick={() => {
              const fov = (zoom - 1) * 30;
              if (fov === 0) return;
              setZoom(zoom - 1);
              viewer_main && viewer_main.setCameraFov(fov);
            }}
          />
          <img
            src='/images/blazingfire-img/icon-bar-look@2x.png'
            alt="widgets"
            sx={styles.controlsBarImg}
            onClick={() => {
              setIsShowList(!isShowList);
            }}
          />
        </Flex>
      </div>
    </Box>
  );
};

export default Widgets;
