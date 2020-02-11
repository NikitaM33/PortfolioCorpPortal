import React, {Component} from 'react';
import style from './Scheme.module.css';
import RightMap from '../../../../../img/RighteMap.jpg';
import ReactTooltip from 'react-tooltip';


class Scheme extends Component {

  render() {

    return (
      <div className={style.officeMap} id={"scheme"}>
        <svg viewBox="0 0 1505 760">
          <a href="#6" title="Генеральный директор" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 159.27929,10.162103 V 150.18785 H 9.1016738 V 9.812039 Z"></path>
          </a>
          <a href="#7" title="Бухгалтерия / Финансовое управление" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 159.16365,155.52467 0.24753,139.60855 H 9.1587171 L 9.6537829,155.27714 Z"></path>
          </a>
          <a href="#8" title="УРП" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 9.1587171,440.1875 159.41118,440.43503 159.16365,300.33141 H 9.6537829 Z"></path>
          </a>
          <a href="#9" data-toggle="tooltip" title="УР" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 9.4206372,445.38569 159.16365,445.63322 V 585.24178 L 9.6673308,584.99424 Z"></path>
          </a>
          <a href="#10" data-toggle="tooltip" title="Пожарная лестница" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 9.6952979,595.63816 H 140.35115 v 73.51727 H 9.4483114 Z"></path>
          </a>
          <a href="#10" data-toggle="tooltip" title="Женский туалет" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 9.40625,680.78947 h 130.69737 l 0.24753,68.31908 H 9.40625 Z"></path>
          </a>
          <a href="#11" data-toggle="tooltip" title="Генеральный директор" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 248.19564,11.089483 V 150.18785 H 164.53026 V 10.741738 Z"></path>
          </a>
          <a href="#12" data-toggle="tooltip" title="УСВ" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 254.46382,10.717926 94.55756,0.247533 V 209.98191 h -94.55756 z"></path>
          </a>
          <a href="#13" data-toggle="tooltip" title="ДВВиИП" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 354.26515,10.512168 H 500.242 V 254.15697 l -75.61391,-0.35006 0.70013,41.65766 -170.83142,-0.35006 v -80.86487 l 100.46848,0.70012 z"></path>
          </a>
          <a href="#13" data-toggle="tooltip" title="Н.В.Полосухин" data-tip="Stanley Ipkis">
            <path className={style.part} d="M 429.52899,368.97809 H 500.242 V 259.40794 l -71.06307,0.35006 z"></path>
          </a>
          <a href="#15" data-toggle="tooltip" title="Малая переговорная" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 254.21628,445.63322 h 95.05264 V 550.0921 l -95.05264,0.24754 z"></path>
          </a>
          <a href="#16" data-toggle="tooltip" title="Сопровождение и обработка кредитных портфелей" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 254.47598,555.09237 h 94.5454 v 193.78284 h -6.17137 v 5.184 l -80.22781,-0.24685 v -5.184 l -7.89935,0.24685 z"></path>
          </a>
          <a href="#17" data-toggle="tooltip" title="УИПпоСПбиЛО" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 354.44018,445.81722 145.57627,0.0635 0.24753,303.22779 -8.41612,-0.24753 0.24754,4.70312 -128.46958,0.24754 -0.24753,-5.19819 -8.66365,0.24753 z"></path>
          </a>
          <a href="#18" data-toggle="tooltip" title="Информационные технологии" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 504.44277,445.99225 h 110.27028 l 0.35006,88.91636 h 49.00901 V 749.148 l -12.25225,-0.35006 v 4.55084 l -139.32562,0.70013 v -5.25097 l -7.70142,0.35006 z"></path>
          </a>
          <a href="#19" data-toggle="tooltip" title="Служебное помещение" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 355.02263,301.23813 69.78444,0.1737 0.17359,67.5701 -69.78443,0.1737 z"></path>
          </a>
          <a href="#20" data-toggle="tooltip" title="Аналитики" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 504.47204,295.13322 110.6472,0.24754 V 253.5477 l 145.05428,0.49506 V 10.470393 L 652.00165,10.717926 651.75411,6.014801 512.39309,5.7672681 v 4.7031249 h -7.92105 z"></path>
          </a>
          <a href="#21" data-toggle="tooltip" title="Малая переговорная 2" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 504.47204,300.82648 h 110.39967 l 0.49507,68.31908 H 504.47204 Z"></path>
          </a>
          <a href="#21" data-toggle="tooltip" title="Лифт" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 674.27961,299.83635 h 85.89391 l 0.24753,69.30921 h -85.89391 z"></path>
          </a>
          <a href="#22" data-toggle="tooltip" title="Мужской туалет" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 769.4415,300.01541 h 94.51738 l 0.35007,145.27671 -94.86745,-0.35006 z"></path>
          </a>
          <a href="#23" data-toggle="tooltip" title="Пожарная лестница" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 674.22399,595.46974 85.76577,0.35007 0.35007,153.32819 -6.65123,-0.35006 v 4.9009 l -72.11326,0.35007 v -5.25097 l -7.00128,0.35006 z"></path>
          </a>
          <a href="#24" data-toggle="tooltip" title="Столовая" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 769.33224,268.89474 150.5,0.49506 -0.49507,-258.919406 -10.39501,0.04177 V 5.9613304 L 785.54446,6.1363626 V 10.6872 l -15.92793,0.175032 z"></path>
          </a>
          <a href="#25" data-toggle="tooltip" title="Комната отдыха" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 924.53536,10.717926 h 11.38652 V 6.5098668 H 1049.787 v 4.2080592 l 20.0502,0.247533 0.495,81.685855 -145.79684,0.247533 z"></path>
          </a>
          <a href="#26" data-toggle="tooltip" title="Большая переговорная" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 924.16996,97.678198 145.27674,0.350064 0.7001,270.949828 H 924.52002 Z"></path>
          </a>
          <a href="#27" data-toggle="tooltip" title="Отдел безопасности" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1075.0477,10.512168 0.7001,199.886762 53.2098,-0.35007 -0.7001,-204.0875292 h -41.6577 l 0.3501,4.9009012 z"></path>
          </a>
          <a href="#28" data-toggle="tooltip" title="МФУ" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1075.5304,214.93256 h 53.4671 v 153.96547 h -53.4671 z"></path>
          </a>
          <a href="#29" data-toggle="tooltip" title="Управление call-центр" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 769.09144,504.453 64.76191,0.35007 v 248.89577 h -48.30889 l -0.35006,-5.25096 -15.40283,0.35006 z"></path>
          </a>
          <a href="#30" data-toggle="tooltip" title="Call-центр" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 839.45438,504.80307 0.35006,248.89577 68.96268,0.35007 0.35007,-5.25097 220.19051,0.35006 -0.3501,-303.15575 H 924.52002 v 59.16088 z"></path>
          </a>
          <a href="#31" data-toggle="tooltip" title="УДВиИП" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1194.0987,749.10855 h 300.0099 l -0.2476,-12.12911 h 4.9507 V 610.73766 h -4.9507 l 0.2476,-10.89144 -299.5139,-0.1757 z"></path>
          </a>
          <a href="#32" data-toggle="tooltip" title="Управление делами" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1194.4197,450.89315 0.35,143.5264 h 299.3051 l -0.2138,-14.6235 h 4.9507 V 458.75247 h -4.9507 v -7.92106 z"></path>
          </a>
          <a href="#33" data-toggle="tooltip" title="УСВД" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1194.4197,299.31528 299.305,0.70013 v 12.60232 l 5.251,0.35006 0.35,113.07079 h -5.601 l 0.3501,18.90348 -299.6551,0.35006 z"></path>
          </a>
          <a href="#33" data-toggle="tooltip" title="Архив" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1194.4197,155.78888 299.305,0.35007 0.175,9.45174 5.076,0.35006 v 116.22137 l -4.9009,-0.17503 0.175,12.95238 -299.9036,0.19375 z"></path>
          </a>
          <a href="#33" data-toggle="tooltip" title="УСВД" data-tip="Stanley Ipkis">
            <path className={style.part} d="m 1194.4197,10.512168 18.5534,-0.350065 V 6.3113952 l 115.8713,-0.3500644 v 4.9009012 h 39.9073 V 5.6112665 l 108.87,0.7001287 0.3501,4.5508368 h 15.7529 l 0.3501,11.902189 4.2007,0.350064 0.7002,115.871305 -5.1147,-0.0458 0.2476,11.13898 h -299.5148 z"></path>
          </a>
          <a href="#33" data-toggle="tooltip" title="Выход" data-tip="Выход">
            <path className={style.part} d="m 1134.6908,680.78947 h 54.2097 l 0.2475,68.31908 h -4.208 l 0.2475,4.45559 -44.5559,0.24754 v -4.95066 h -5.9408 z"></path>
          </a>
        </svg>

        <img src={RightMap} alt="" />
        <ReactTooltip />
      </div>
    )
  }
}

export default Scheme;