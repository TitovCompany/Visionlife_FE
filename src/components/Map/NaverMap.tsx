import {useState, useEffect} from 'react';

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

function NaverMap({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  // 지도 로딩 상태
  const [isMapLoaded, setMapLoaded] = useState(false);
  const initMap = () => {
    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 16,
    };

    // 지도 초기화 확인
    if (document.getElementById('map')) {
      mapInstance = new naver.maps.Map('map', mapOptions);
    }

    // Marker 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: mapInstance || undefined,
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, 'click', () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(16);
    });

    // 지도 로드 완료
    setMapLoaded(true);
  };

  useEffect(() => {
    // 스크립트 로딩 확인
    if (typeof naver === 'undefined') {
      loadScript(
        `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_MAP_API_KEY}`,
        initMap
      );
    } else {
      initMap();
    }
  }, [latitude, longitude]);

  /*useEffect(() => {
    const initializeNaverMap = () => {
      if (window.naver && window.naver.maps) {
        initMap();
      }
    };

    // 스크립트가 이미 로드되었는지 확인
    if (!window.naver || !window.naver.maps) {
      loadScript(
        `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_MAP_API_KEY}`,
        () => {
          console.log("✅ Naver Map Script Loaded");
          initializeNaverMap();
        }
      );
    } else {
      initializeNaverMap();
    }
  }, [latitude, longitude]);*/

  {
    /* 위치 정보(지도) */
  }
  return <>{isMapLoaded && <div className='h-full w-full' />}</>;
}

export default NaverMap;
