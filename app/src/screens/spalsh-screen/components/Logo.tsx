import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function Logo(props: SvgProps) {
  return (
    <Svg
      width={117}
      height={49}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31.118 40.161c1.027.983 1.54 2.1 1.54 3.35s-.468 2.367-1.406 3.35c-.893.983-1.943 1.474-3.15 1.474-1.16 0-2.232-.469-3.215-1.407L10.214 33.327v10.251c0 1.563-.491 2.747-1.474 3.551-.938.804-2.122 1.206-3.551 1.206-1.474 0-2.702-.402-3.685-1.206-.938-.804-1.407-1.988-1.407-3.551V5.187c0-1.563.469-2.747 1.407-3.551C2.487.832 3.714.43 5.189.43c1.43 0 2.613.402 3.55 1.206.984.804 1.475 1.988 1.475 3.551v23.986l13.4-13.199c.983-.983 2.077-1.474 3.283-1.474 1.25 0 2.345.469 3.283 1.407.938.893 1.407 1.965 1.407 3.216 0 1.161-.514 2.256-1.541 3.283l-8.911 8.509 9.983 9.246zM52.34 48.536c-3.396 0-6.366-.692-8.912-2.077a14.42 14.42 0 01-5.896-5.896c-1.34-2.546-2.01-5.539-2.01-8.978 0-3.44.715-6.454 2.144-9.045 1.474-2.635 3.529-4.668 6.164-6.097 2.636-1.43 5.673-2.144 9.112-2.144 1.787 0 3.574.246 5.36.737 1.831.491 3.462 1.184 4.891 2.077 1.385.849 2.077 2.1 2.077 3.752 0 1.161-.268 2.122-.804 2.881-.536.715-1.25 1.072-2.144 1.072-.58 0-1.139-.09-1.675-.268-.491-.223-1.161-.536-2.01-.938-.938-.491-1.787-.871-2.546-1.139-.715-.268-1.54-.402-2.479-.402-2.501 0-4.422.804-5.762 2.412-1.295 1.563-1.943 3.864-1.943 6.901s.648 5.36 1.943 6.968c1.34 1.608 3.26 2.412 5.762 2.412.938 0 1.764-.112 2.48-.335.714-.268 1.585-.67 2.612-1.206.849-.402 1.519-.692 2.01-.871a3.84 3.84 0 011.608-.335c.849 0 1.541.38 2.077 1.139.58.76.871 1.72.871 2.881 0 1.653-.692 2.881-2.077 3.685-1.43.893-3.082 1.586-4.958 2.077a23.181 23.181 0 01-5.896.737zM85.044 14.299c4.825 0 8.398 1.184 10.72 3.551 2.323 2.323 3.485 5.896 3.485 10.72v15.142c0 1.474-.425 2.635-1.273 3.484-.85.804-2.033 1.206-3.551 1.206-1.43 0-2.591-.424-3.484-1.273-.85-.893-1.273-2.032-1.273-3.417v-.469c-.67 1.653-1.787 2.948-3.35 3.886-1.564.938-3.395 1.407-5.495 1.407-2.233 0-4.265-.447-6.096-1.34-1.787-.893-3.217-2.144-4.288-3.752-1.028-1.608-1.541-3.395-1.541-5.36 0-2.412.603-4.31 1.809-5.695 1.25-1.385 3.238-2.39 5.963-3.015 2.724-.625 6.454-.938 11.189-.938H89.6V27.23c0-1.876-.425-3.238-1.273-4.087-.805-.849-2.167-1.273-4.088-1.273-1.92 0-4.69.67-8.307 2.01-1.028.491-1.899.737-2.614.737-.982 0-1.764-.335-2.344-1.005-.581-.715-.871-1.63-.871-2.747 0-.893.2-1.63.603-2.211.402-.58 1.05-1.117 1.943-1.608 1.563-.849 3.461-1.519 5.695-2.01a31.725 31.725 0 016.7-.737zm-2.01 27.269c1.966 0 3.551-.648 4.757-1.943 1.207-1.34 1.81-3.06 1.81-5.159v-1.139h-1.14c-3.617 0-6.163.29-7.638.871-1.429.58-2.143 1.63-2.143 3.149 0 1.25.402 2.278 1.206 3.082.848.76 1.898 1.139 3.148 1.139zM111.905 48.402c-1.474 0-2.703-.402-3.685-1.206-.938-.804-1.407-1.988-1.407-3.551V5.187c0-1.563.469-2.747 1.407-3.551.982-.804 2.211-1.206 3.685-1.206 1.429 0 2.613.402 3.551 1.206.982.804 1.474 1.988 1.474 3.551v38.458c0 1.563-.492 2.747-1.474 3.551-.938.804-2.122 1.206-3.551 1.206z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Logo;