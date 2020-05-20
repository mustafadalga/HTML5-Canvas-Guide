/**
 * bar.js
 * simple ,elegant bar chart library
 * 12.05.2020 - versiyon 1.0 
 * https://github.com/mustafadalga
 * Copyright 2020 Mustafa Dalğa 
 * Relased under the MIT Licence
 * https://github.com/mustafadalga/BarJS/Licence
 * 
 */

'use strict';

function BarChart(targetId, width, height, data) {


    var chart = this;
    // Specify Configurations
    chart.configureChart(targetId, width, height, data)

    // Pre Operations
    chart.performPreOperations();



    // Draw Chart
    chart.drawChart();


}


BarChart.prototype.configureChart = function(targetId, width, height, data) {

    //Base
    var chart = this;


    //Global Canvas Specifications
    chart.setCanvasParameters(targetId, width, height, data);


    //Global Chart Specifications
    chart.setChartParameters();


}

BarChart.prototype.setCanvasParameters = function(targetId, width, height, data) {

    //Base
    var chart = this;

    //Canvas specification come from outside 
    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
}

BarChart.prototype.setChartParameters = function() {

    var chart = this;

    //Axis Configurations
    chart.axisRatio = 5;
    chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
    chart.axisColor = "#b1b1b1";
    chart.axisWidth = 0.75;

    //Label Configurations
    chart.fontRatio = 3; //in terms of percentage
    chart.fontFamily = "times";
    chart.fontStyle = "normal";
    chart.fontWeight = "300";
    chart.fontColor = "#666";
    chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;


    //Guideline Configuration
    chart.guideLineColor = "#e5e5e5";
    chart.guideLineWidth = 0.5;
}

BarChart.prototype.performPreOperations = function() {

    //Base
    var chart = this;

    // Create Canvas
    chart.createCanvas();

    //Get Data
    chart.handleData();

    chart.prepareData();

}

BarChart.prototype.createCanvas = function() {
    //Base
    var chart = this;

    //Create Canvas

    var canvas = document.createElement('canvas');
    canvas.id = chart.id + "-" + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;

    document.getElementById(chart.id).innerHTML = '';
    document.getElementById(chart.id).appendChild(canvas)


    //Add canvas to chart object
    chart.canvas = canvas;
    chart.context = canvas.getContext('2d');
}

BarChart.prototype.handleData = function() {
    //Base
    var chart = this;

    //Data Set
    chart.labels = [];
    chart.values = [];


    chart.data.forEach(item => {
        chart.labels.push(item.label)
        chart.values.push(item.value)
    })
}

BarChart.prototype.prepareData = function() {
    //Base
    var chart = this;

    //Global Variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);


    // Axis Specifications
    chart.verticalAxisWidth = chart.height - 2 * chart.verticalMargin; //bottom and top margins
    chart.horizontalAxisWidth = chart.width - 2 * chart.horizontalMargin; //left and right margins


    // Label Specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;

}

BarChart.prototype.drawChart = function() {
    //Base
    var chart = this;

    //Vertical Axis
    chart.drawVerticalAxis()

    //Vertical Labels
    chart.drawVerticalLabels()


    //Horizontal Axis
    chart.drawHorizontalAxis()

    //Horizontal Labels
    chart.drawHorizontalLabels()

    //Horizontal Guidelines
    chart.drawHorizontalGuideLines();



    //Vertical Guidelines
    chart.drawVerticalGuideLines();

    //Bars
    chart.drawBars();
}

BarChart.prototype.drawVerticalAxis = function() {
    //Base
    var chart = this;

    //Vertical Axis
    chart.context.beginPath()
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin)
    chart.context.lineTo(chart.horizontalMargin, chart.height - chart.verticalMargin)
    chart.context.stroke();
}

BarChart.prototype.drawVerticalLabels = function() {
    //Base
    var chart = this;

    var labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px ' + chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.textAlign = "right";
    chart.context.fillStyle = chart.fontColor;

    //Scale Values
    let scaledVerticalFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;
    for (let i = 0; i < chart.itemsNum; i++) {
        let labelText = chart.verticalUpperBound - i * chart.verticalLabelFreq;
        let verticalLabelX = chart.horizontalMargin - chart.horizontalMargin / chart.axisRatio;
        let verticalLabelY = chart.verticalMargin + i * scaledVerticalFreq;

        chart.context.fillText(labelText, verticalLabelX, verticalLabelY);
    }

}

BarChart.prototype.drawHorizontalAxis = function() {
    //Base
    var chart = this;


    //Horizontal Axis
    chart.context.beginPath()
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.height - chart.verticalMargin)
    chart.context.lineTo(chart.width - chart.horizontalMargin, chart.height - chart.verticalMargin)
    chart.context.stroke();
}


BarChart.prototype.drawHorizontalLabels = function() {
    //Base
    var chart = this;

    var labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + 'px ' + chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.textAlign = "center";
    chart.context.textBaseline = "top";

    chart.context.fillStyle = chart.fontColor;

    //Scale Values
    let scaledVerticalFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;
    for (let i = 0; i < chart.itemsNum; i++) {
        let horizontalLabelX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        let horizontalLabelY = chart.height - chart.verticalMargin + chart.verticalMargin / chart.axisRatio;

        chart.context.fillText(chart.labels[i], horizontalLabelX, horizontalLabelY);
    }

}

BarChart.prototype.drawHorizontalGuideLines = function() {
    //Base
    var chart = this;

    //Specificaitons
    chart.context.strokeStyle = chart.guideLineColor;
    chart.context.lineWidth = chart.guideLineWidth;


    //Scale Values
    let scaledVerticalFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;
    for (let i = 0; i < chart.itemsNum; i++) {



        let horizontalGuideLineStartX = chart.horizontalMargin;
        let horizontalGuideLineStartY = chart.verticalMargin + i * scaledVerticalFreq;
        let horizontalGuideLineEndX = chart.horizontalMargin + chart.horizontalAxisWidth;
        let horizontalGuideLineEndY = chart.verticalMargin + i * scaledVerticalFreq;

        chart.context.beginPath();
        chart.context.moveTo(horizontalGuideLineStartX, horizontalGuideLineStartY);
        chart.context.lineTo(horizontalGuideLineEndX, horizontalGuideLineEndY);
        chart.context.stroke();

    }


}

BarChart.prototype.drawVerticalGuideLines = function() {
    //Base
    var chart = this;


    //Specificaitons
    chart.context.strokeStyle = chart.guideLineColor;
    chart.context.lineWidth = chart.guideLineWidth;


    for (let i = 0; i <= chart.itemsNum; i++) {

        let VerticalGuideLineStartX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        let VerticalGuideLineStartY = chart.height - chart.verticalMargin;

        let VerticalGuideLineEndX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        let VerticalGuideLineEndY = chart.verticalMargin;


        chart.context.beginPath();
        chart.context.moveTo(VerticalGuideLineStartX, VerticalGuideLineStartY);
        chart.context.lineTo(VerticalGuideLineEndX, VerticalGuideLineEndY);
        chart.context.stroke();

    }



}


BarChart.prototype.drawBars = function() {
    //Base
    var chart = this;

    let color = chart.createRandomRGBColor();
    let fillOpacity = '0.3'
    let fillColor = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + fillOpacity + ')';
    let borderColor = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ')';
    for (let i = 0; i < chart.itemsNum; i++) {
        chart.context.beginPath();

        let barX = chart.horizontalMargin + i * chart.horizontalLabelFreq + chart.horizontalLabelFreq / chart.axisRatio;
        let barY = chart.height - chart.verticalMargin;
        let barWidth = chart.horizontalLabelFreq - 2 * chart.horizontalLabelFreq / chart.axisRatio;
        let barHeight = -1 * (chart.verticalAxisWidth * chart.values[i] / chart.maxValue);
        console.log(barHeight)
        chart.context.fillStyle = fillColor;
        chart.context.strokeStyle = borderColor;
        chart.context.rect(barX, barY, barWidth, barHeight);
        chart.context.stroke()
        chart.context.fill()


    }


}

BarChart.prototype.createRandomRGBColor = function() {

    let red = getRandomInt(0, 257);
    let green = getRandomInt(0, 257);
    let blue = getRandomInt(0, 257);
    return { r: red, g: green, b: blue }

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}