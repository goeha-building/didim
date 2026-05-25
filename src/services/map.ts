// src/services/map.ts
// Kakao Map API 로드 및 지도 관련 서비스

let map: kakao.maps.Map | null = null; // 지도 인스턴스
let marker: kakao.maps.Marker | null = null; // 마커 인스턴스

/**
 * 지도를 초기화하고, 지정된 컨테이너에 지도를 렌더링합니다.
 * @param mapContainer 지도를 렌더링할 DOM 요소
 * @param latitude 초기 중심 위도 (기본값: 서울 시청)
 * @param longitude 초기 중심 경도 (기본값: 서울 시청)
 * @param level 초기 확대 레벨
 * @returns kakao.maps.Map 지도 인스턴스
 */
export function initMap(
  mapContainer: HTMLElement,
  latitude: number = 37.566826, // 서울 시청 위도
  longitude: number = 126.9786567, // 서울 시청 경도
  level: number = 3
): kakao.maps.Map {
  const mapOption: kakao.maps.MapOptions = {
    center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
    level: level, // 지도의 확대 레벨
  };

  // 기존 맵 인스턴스가 있다면 파괴 후 새로 생성 (React StrictMode 대응)
  if (map) {
    // Kakao Map API에는 명시적인 map 파괴 메서드가 없으므로,
    // 컨테이너를 비우고 새로 생성하는 방식으로 처리합니다.
    while (mapContainer.firstChild) {
      mapContainer.removeChild(mapContainer.firstChild);
    }
  }

  map = new kakao.maps.Map(mapContainer, mapOption);
  return map;
}

/**
 * 지도에 마커를 표시합니다.
 * @param map 지도 인스턴스
 * @param position 마커를 표시할 위도, 경도
 * @param imageSrc 마커 이미지 URL (선택 사항)
 */
export function displayMarker(mapInstance: kakao.maps.Map, position: kakao.maps.LatLng, imageSrc?: string) {
  if (marker) {
    marker.setMap(null); // 기존 마커 제거
  }

  let markerImage = undefined;
  if (imageSrc) {
    const imageSize = new kakao.maps.Size(64, 69); // 마커 이미지의 크기
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커 이미지의 옵션
    markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  }

  marker = new kakao.maps.Marker({
    map: mapInstance,
    position: position,
    image: markerImage, // 마커 이미지 설정
  });

  marker.setMap(mapInstance); // 마커를 지도에 표시
}

/**
 * 현재 사용자 위치를 가져와 지도에 표시합니다.
 * @param mapInstance 지도를 렌더링할 지도 인스턴스
 */
export function getCurrentLocation(mapInstance: kakao.maps.Map): Promise<kakao.maps.LatLng> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
          const locPosition = new kakao.maps.LatLng(lat, lon);

          mapInstance.setCenter(locPosition); // 지도의 중심을 현재 위치로 이동
          displayMarker(mapInstance, locPosition); // 마커 표시
          resolve(locPosition);
        },
        (error) => {
          console.error('위치 정보를 가져오는 데 실패했습니다:', error);
          reject(new Error('위치 정보를 가져올 수 없습니다.'));
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
    } else {
      reject(new Error('이 브라우저에서는 Geolocation이 지원되지 않습니다.'));
    }
  });
}
