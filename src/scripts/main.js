'use strict';

const mobileMenuList = document.querySelector('.mobile-menu__list');
const headerToggler = document.querySelector('.header__toggler');

mobileMenuList.onclick = () => {
  headerToggler.checked = false;
};

const toggle = document.querySelector('[data-toggle]');
const collapse = document.querySelector('.collapse');
const btn = document.querySelector('.btn');
const btnPartVertical = document.querySelector('.btn__part--vertical');

toggle.addEventListener('click', () => {
  if (collapse.className.includes('show')) {
    collapse.className = 'collapse';
    btnPartVertical.style['background-color'] = null;

    btn.style.cssText = `
      border-radius: 52px;
    `;
  } else {
    collapse.className = 'collapse.show';

    btn.style.cssText = `
      border-color: #e5e5e5;
      border-radius: 18px 18px 0 0;
      border-bottom-color: transparent;
    `;
    btnPartVertical.style['background-color'] = 'transparent';
  }
});

function addActiveClass(container, elements, className) {
  return (
    container.addEventListener('click', event => {
      if (!event.target.classList.contains(className)) {
        return;
      }

      for (const element of elements) {
        element.classList.remove(`${className}--is-active`);
      }

      event.target.classList.add(`${className}--is-active`);
    })
  );
}

const cardYears = document.querySelector('.card__years');
const cardYearAll = document.querySelectorAll('.card__year');
const cardButtons = document.querySelector('.card__buttons');
const btnCardAll = document.querySelectorAll('.btn__card');
const navList = document.querySelector('.nav__list');
const navLinksAll = document.querySelectorAll('.nav__link');

addActiveClass(cardYears, cardYearAll, 'card__year');
addActiveClass(cardButtons, btnCardAll, 'btn__card');
addActiveClass(navList, navLinksAll, 'nav__link');

window.addEventListener('load', () => {
  // eslint-disable-next-line
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    axisX: {
      interval: 1,
      tickLength: 6,
      tickColor: '#6f6f6f',
      lineColor: '#6f6f6f',
      labelFontSize: '12',
      minimum: 0,
    },
    axisY: {
      interval: 250,
      gridThickness: 1,
      gridColor: 'transparent',
      tickColor: '#6f6f6f',
      lineColor: '#6f6f6f',
      valueFormatString: '####',
      labelFontSize: '12',
      maximum: 1100,
    },
    legend: {
      itemWidth: 150,
      markerMargin: 10,
      itemWrap: true,
    },
    toolTip: {
      borderColor: '#e5e5e5',
      borderThickness: 1,
      content: '{name}: {y}',
      fontColor: '#6f6f6f',
    },

    data: [{
      type: 'line',
      name: 'Revenue',
      showInLegend: true,
      markerColor: 'transparent',
      lineColor: '#2f80ed',
      legendMarkerType: 'square',
      legendMarkerColor: '#2f80ed',
      legendMarkerBorderColor: '#2f80ed',
      legendMarkerBorderThickness: 12,
      dataPoints: [
        {
          x: 0,
          y: 75,
        },
        {
          x: 1,
          y: 250,
        },
        {
          x: 2,
          y: 220,
        },
        {
          x: 3,
          y: 260,
        },
        {
          x: 4,
          y: 100,
        },
        {
          x: 5,
          y: 90,
        },
        {
          x: 6,
          y: 80,
        },
        {
          x: 7,
          y: 170,
        },
        {
          x: 8,
          y: 190,
        },
        {
          x: 9,
          y: 250,
        },
        {
          x: 10,
          y: 300,
        },
        {
          x: 11,
          y: 500,
        },
      ],
    },
    {
      type: 'line',
      name: '12MMA',
      showInLegend: true,
      markerColor: 'transparent',
      lineColor: '#63ecdb',
      legendMarkerType: 'square',
      legendMarkerColor: '#63ecdb',
      legendMarkerBorderColor: '#63ecdb',
      legendMarkerBorderThickness: 12,
      dataPoints: [
        {
          x: 0,
          y: 250,
        },
        {
          x: 1,
          y: 320,
        },
        {
          x: 2,
          y: 400,
        },
        {
          x: 3,
          y: 340,
        },
        {
          x: 4,
          y: 300,
        },
        {
          x: 5,
          y: 360,
        },
        {
          x: 6,
          y: 370,
        },
        {
          x: 7,
          y: 420,
        },
        {
          x: 8,
          y: 590,
        },
        {
          x: 9,
          y: 660,
        },
        {
          x: 10,
          y: 670,
        },
        {
          x: 11,
          y: 800,
        },
      ],
    }],
  });

  chart.render();
});
