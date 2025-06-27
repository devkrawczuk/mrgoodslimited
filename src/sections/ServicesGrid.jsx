// ServicesGrid.jsx
import React from 'react';
import servicesData from '../data/servicesList.json';
import {
  FaPaintRoller,
  FaBrush,
  FaHome,
  FaSearch,
  FaRedoAlt,
  FaEraser,
  FaCity,
  FaBug
} from 'react-icons/fa';

import {
  GiTrowel,
  GiBrickWall,
  GiVirus,
  GiPaintBrush,
  GiSpray,
  GiCorkedTube,
  GiFountainPen,
  GiCrackedGlass,
  GiWoodFrame,
  GiGreekTemple,
  GiPaintedPottery,
  GiWaterDrop,
  GiVacuumCleaner,
  GiToolbox
} from 'react-icons/gi';

import {
  MdWallpaper,
  MdOutlineHomeRepairService,
  MdOutlineRoofing,
  MdBuild
} from 'react-icons/md';

import { RiPaintBrushFill, RiPaintBrushLine } from "react-icons/ri";

import {
  TbLayoutBoardSplit,
  TbLayout2,
  TbBiohazard
} from 'react-icons/tb';

const iconMap = {
  FaPaintRoller: FaPaintRoller,
  FaBrush: FaBrush,
  FaHome: FaHome,
  FaSearch: FaSearch,
  FaRedoAlt: FaRedoAlt,
  FaEraser: FaEraser,
  FaCity: FaCity,
  FaBug: FaBug,

  GiTrowel: GiTrowel,
  GiBrickWall: GiBrickWall,
  GiVirus: GiVirus,
  GiPaintBrush: GiPaintBrush,
  GiSpray: GiSpray,
  GiCorkedTube: GiCorkedTube,
  GiFountainPen: GiFountainPen,
  GiCrackedGlass: GiCrackedGlass,

  GiWoodFrame: GiWoodFrame,
  GiGreekTemple: GiGreekTemple,
  GiPaintedPottery: GiPaintedPottery,
  GiWaterDrop: GiWaterDrop,
  GiVacuumCleaner: GiVacuumCleaner,
  GiToolbox: GiToolbox,

  MdWallpaper: MdWallpaper,
  MdOutlineHomeRepairService: MdOutlineHomeRepairService,
  MdBuild: MdBuild,
  MdOutlineRoofing: MdOutlineRoofing,
  TbLayoutBoardSplit: TbLayoutBoardSplit,
  TbLayout2: TbLayout2,
  TbBiohazard: TbBiohazard,
  RiPaintBrushLine: RiPaintBrushLine,
  RiPaintBrushFill: RiPaintBrushFill
};

function ServicesGrid({ visibleServices }) {
  const services = servicesData.map(page => ({
    title: page.title,
    text: page.description,
    slug: page.url,
    Icon: iconMap[page.icon] || FaHome
  }));

  const visible = visibleServices ? services.slice(0, visibleServices) : services;


  return (
    <section className="services-section position-relative text-white py-5">
      <div className="container position-relative z-2">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {visible.map((service, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="service-box p-4 rounded shadow text-center h-100 d-flex flex-column">
                <div className="icon-wrapper mx-auto mb-3">
                  <service.Icon size={40} />
                </div>
                <h5 className="mb-2">{service.title}</h5>
                <p>{service.text}</p>
                <div className="mt-auto">
                  <a href={service.slug} className="btn btn-paint">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/services" className="btn btn-custom fw-bold px-4 py-2 rounded-pill">See All Services</a>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
