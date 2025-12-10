"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { FONT_FAMILY, colors } from "@/theme";

const EarningsOverview: React.FC = () => {
  // Exact data values from screenshot
  const earningsData = [
    { month: "Jan", value: 32000 },
    { month: "Feb", value: 38000 },
    { month: "Mar", value: 41000 },
    { month: "Apr", value: 35000 },
    { month: "May", value: 49000 },
    { month: "Jun", value: 51000 },
    { month: "Jul", value: 57000 },
    { month: "Aug", value: 61000 },
    { month: "Sep", value: 54000 },
    { month: "Oct", value: 45000 },
    { month: "Nov", value: 40000 },
    { month: "Dec", value: 38000 },
  ];

  const maxValue = 60000;
  const graphHeight = 300;
  const yAxisLabels = [60000, 50000, 40000, 30000, 20000, 10000, 0];

  // Calculate SVG path for area (using actual coordinates)
  const getAreaPath = (width: number) => {
    const points = earningsData.map((data, index) => {
      const x = (index / (earningsData.length - 1)) * width;
      const y = graphHeight - (data.value / maxValue) * graphHeight;
      return `${x} ${y}`;
    });
    return `M 0 ${graphHeight} ${points.join(" ")} L ${width} ${graphHeight} Z`;
  };

  // Calculate polyline points
  const getLinePoints = (width: number) => {
    return earningsData
      .map((data, index) => {
        const x = (index / (earningsData.length - 1)) * width;
        const y = graphHeight - (data.value / maxValue) * graphHeight;
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm overflow-x-auto"
      style={{
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-start justify-between mb-4 md:mb-6 gap-4">
        <div>
          <h2
            className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Earnings Overview
          </h2>
          <p
            className="text-xs md:text-sm text-gray-600"
            style={{
              fontFamily: FONT_FAMILY,
            }}
          >
            Track your monthly and yearly income
          </p>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <select
              className="px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-white appearance-none cursor-pointer text-gray-900 w-full md:w-auto"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              <option>2025</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 pointer-events-none"
            />
          </div>
          <div className="relative flex-1 md:flex-initial">
            <select
              className="px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-white appearance-none cursor-pointer text-gray-900 w-full md:w-auto"
              style={{
                fontFamily: FONT_FAMILY,
              }}
            >
              <option>Monthly</option>
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-900 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="relative overflow-x-auto" style={{ height: `${graphHeight + 60}px`, minHeight: '350px' }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs pr-2 md:pr-3" style={{ color: "#9CA3AF", fontFamily: FONT_FAMILY }}>
          {yAxisLabels.map((label) => (
            <span key={label} className="text-[10px] md:text-xs">{label.toLocaleString()}</span>
          ))}
        </div>

        {/* Graph area */}
        <div
          className="absolute left-12 md:left-16 right-0 top-0 bottom-12"
          style={{ height: `${graphHeight}px`, minWidth: '600px' }}
        >
          <svg
            width="100%"
            height="100%"
            className="overflow-visible"
            style={{ minHeight: `${graphHeight}px` }}
            viewBox={`0 0 1000 ${graphHeight}`}
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            {yAxisLabels.slice(0, -1).map((label) => {
              const y = graphHeight - (label / maxValue) * graphHeight;
              return (
                <line
                  key={label}
                  x1="0"
                  y1={y}
                  x2="1000"
                  y2={y}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                  opacity="0.5"
                />
              );
            })}

            {/* Area fill - light purple background */}
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d={getAreaPath(1000)}
              fill="url(#areaGradient)"
            />

            {/* Line - solid purple */}
            <polyline
              points={getLinePoints(1000)}
              fill="none"
              stroke={colors.brand.primarySoft}
              strokeWidth="2.5"
            />

            {/* Data points - purple circles */}
            {earningsData.map((data, index) => {
              const x = (index / (earningsData.length - 1)) * 1000;
              const y = graphHeight - (data.value / maxValue) * graphHeight;
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="5"
                  fill={colors.brand.primarySoft}
                  stroke="white"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] md:text-xs mt-3" style={{ color: "#9CA3AF", fontFamily: FONT_FAMILY }}>
            {earningsData.map((data, index) => (
              <span key={index}>{data.month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsOverview;

