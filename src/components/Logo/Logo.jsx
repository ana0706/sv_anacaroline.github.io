import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import style from './Logo.module.css';

let Logo = ({ className }) => {
  const { formatMessage } = useIntl();

  return (
    <svg
      className={`${style.Logo} ${className}`}
      id="icon-vnator"
      viewBox="0 0 45 32">
      <title>{formatMessage({ id: 'logo.title' })}</title>
      <path d="M27.613 21.251h-0.505v1.813h0.505zM22.209 28.599l0.114 0.032 0.759-2.419c0.005-0.016 0.003-0.031-0.004-0.045s-0.020-0.024-0.036-0.029l-0.114-0.031c-0.015-0.005-0.029-0.004-0.043 0.004s-0.024 0.020-0.029 0.036l-0.687 2.378c-0.005 0.016-0.004 0.031 0.004 0.045s0.020 0.024 0.036 0.029zM23.391 28.135c0 0.016 0.006 0.030 0.018 0.043l0.092 0.092c0.012 0.012 0.026 0.018 0.042 0.018s0.030-0.006 0.043-0.018l0.858-0.858c0.012-0.012 0.018-0.026 0.018-0.042s-0.006-0.030-0.018-0.042l-0.858-0.858c-0.013-0.012-0.027-0.018-0.043-0.018s-0.030 0.006-0.042 0.018l-0.092 0.092c-0.012 0.013-0.018 0.027-0.018 0.042s0.006 0.030 0.018 0.042l0.724 0.724-0.724 0.724c-0.012 0.012-0.018 0.026-0.018 0.042zM29.344 23.101c0.559 0 0.979-0.422 0.979-0.942v-0.005c0-0.52-0.415-0.937-0.974-0.937s-0.979 0.422-0.979 0.943v0.005c0 0.521 0.415 0.938 0.974 0.938zM28.885 22.153c0-0.261 0.184-0.484 0.459-0.484 0.277 0 0.466 0.228 0.466 0.49v0.005c0 0.262-0.184 0.485-0.461 0.485-0.274 0-0.464-0.228-0.464-0.489v-0.005zM20.806 27.411l0.859 0.858c0.012 0.012 0.026 0.018 0.042 0.018s0.030-0.006 0.042-0.018l0.092-0.092c0.012-0.013 0.018-0.027 0.018-0.043s-0.006-0.030-0.018-0.042l-0.724-0.724 0.724-0.724c0.012-0.012 0.018-0.027 0.018-0.042s-0.006-0.030-0.018-0.042l-0.092-0.092c-0.013-0.012-0.027-0.018-0.042-0.018s-0.030 0.006-0.042 0.018l-0.859 0.858c-0.012 0.013-0.018 0.026-0.018 0.042s0.006 0.030 0.018 0.042zM15.795 22.679c-0.21 0-0.409-0.075-0.588-0.217l-0.28 0.334c0.223 0.199 0.528 0.3 0.849 0.3 0.44 0 0.733-0.22 0.733-0.59v-0.005c0-0.339-0.259-0.474-0.676-0.565-0.251-0.057-0.313-0.093-0.313-0.176v-0.005c0-0.065 0.060-0.117 0.181-0.117 0.161 0 0.342 0.062 0.508 0.179l0.251-0.355c-0.197-0.158-0.438-0.241-0.746-0.241-0.435 0-0.702 0.243-0.702 0.58v0.005c0 0.373 0.298 0.482 0.684 0.57 0.246 0.057 0.306 0.098 0.306 0.173v0.005c0 0.077-0.073 0.124-0.207 0.124zM17.998 13.934c0 0.585-0.279 0.881-0.72 0.881-0.387 0-0.675-0.216-0.98-0.585l-1.124 1.061c0.441 0.603 1.115 1.061 2.212 1.061 0.72 0 1.313-0.225 1.727-0.639 0.423-0.423 0.621-0.98 0.621-1.772v-7.040h-1.736v7.032zM26.351 22.153v-0.005c0-0.523-0.376-0.896-1.023-0.896h-0.699v1.813h0.689c0.653 0 1.034-0.388 1.034-0.912zM25.132 21.697h0.204c0.301 0 0.5 0.168 0.5 0.458v0.005c0 0.293-0.199 0.458-0.5 0.458h-0.204zM34.212 0.001h-24.688l1.675 2.833c0.426 0.72 0.747 1.345 0.747 2.621v18.721c0 0.771 0.121 1.328 0.85 1.777l9.829 6.046 9.828-6.045c0.731-0.449 0.852-1.007 0.852-1.777v-18.721c0-1.276 0.321-1.901 0.747-2.621l1.675-2.833h-1.514zM22.625 30.477l-8.289-5.099h16.578zM32.009 24.514h-18.767v-4.713h18.767zM13.242 18.938v-14.645h8.952v14.645zM32.009 18.938h-8.952v-14.645h8.952zM32.502 2.908c-0.21 0.355-0.456 0.521-1.116 0.521h-17.523c-0.66 0-0.906-0.167-1.116-0.521l-0.953-1.611h21.659zM26.413 12.329h2.24v3.916h1.745v-9.343h-1.745v3.88h-2.24v-3.88h-1.745v9.343h1.745zM22.893 23.101c0.559 0 0.979-0.422 0.979-0.942v-0.005c0-0.52-0.415-0.937-0.974-0.937s-0.979 0.422-0.979 0.943v0.005c0 0.521 0.415 0.938 0.974 0.938zM22.435 22.153c0-0.261 0.184-0.484 0.459-0.484 0.277 0 0.466 0.228 0.466 0.49v0.005c0 0.262-0.184 0.485-0.461 0.485-0.274 0-0.464-0.228-0.464-0.489v-0.005zM18.738 22.637h-0.974v-0.288h0.87v-0.396h-0.87v-0.275h0.961v-0.427h-1.458v1.813h1.471zM19.997 22.515h0.22l0.365 0.549h0.58l-0.433-0.632c0.225-0.096 0.373-0.28 0.373-0.557v-0.005c0-0.179-0.054-0.318-0.16-0.422-0.122-0.124-0.314-0.197-0.59-0.197h-0.857v1.813h0.502zM19.997 21.686h0.329c0.168 0 0.272 0.073 0.272 0.215v0.005c0 0.132-0.098 0.215-0.269 0.215h-0.332z"></path>
    </svg>
  );
};

Logo.defaultProps = {
  width: '1em',
  height: '1em',
  className: '',
};

Logo.propTypes = {
  className: Type.string,
  width: Type.string,
  height: Type.string,
};

export { Logo };
