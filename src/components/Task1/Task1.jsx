import React, { useState } from "react";
import { message } from "antd";

import "./Task1.css";

function Task1() {
  const [messageApi, contextHolder] = message.useMessage();

  const [firstVector, setFirstVector] = useState(() => {
    return {
      x1: 0,
      x2: 0,
      x3: 0,
    };
  });

  const [secondVector, setSecondVector] = useState(() => {
    return {
      y1: 0,
      y2: 0,
      y3: 0,
    };
  });

  const [metricResult, setMetricResult] = useState(() => {
    return {
      evklidResult: 0,
      mistoResult: 0,
      chebyshevResult: 0,
    };
  });

  const handleFirstVectorChange = (event) => {
    setFirstVector((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSecondVectorChange = (event) => {
    setSecondVector((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleComputeEvklid = (vector1, vector2) => {
    const [{ x1, x2, x3 }, { y1, y2, y3 }] = [vector1, vector2];

    const result = Math.sqrt(
      Math.pow(x1 - y1, 2) + Math.pow(x2 - y2, 2) + Math.pow(x3 - y3, 2)
    );
    return Number(result).toFixed(2) ?? 0;
  };

  const handleComputeMisto = (vector1, vector2) => {
    const [{ x1, x2, x3 }, { y1, y2, y3 }] = [vector1, vector2];

    const result = Math.abs(x1 - y1) + Math.abs(x2 - y2) + Math.abs(x3 - y3);
    return Number(result).toFixed(2) ?? 0;
  };

  const handleComputeChebyshev = (vector1, vector2) => {
    const [{ x1, x2, x3 }, { y1, y2, y3 }] = [vector1, vector2];

    const result = Math.max(
      Math.abs(x1 - y1),
      Math.abs(x2 - y2),
      Math.abs(x3 - y3)
    );

    return Number(result).toFixed(2) ?? 0;
  };

  const handleComputeMetrics = () => {
    const [evklid, misto, chebyshev] = [
      handleComputeEvklid(firstVector, secondVector),
      handleComputeMisto(firstVector, secondVector),
      handleComputeChebyshev(firstVector, secondVector),
    ];

    setMetricResult(() => ({
      evklidResult: evklid,
      mistoResult: misto,
      chebyshevResult: chebyshev,
    }));

    messageApi.open({
      type: "success",
      content: "Всі метрики розраховано успішно!",
    });
  };

  const handleClearAll = () => {
    setFirstVector({ x1: 0, x2: 0, x3: 0 });
    setSecondVector({ y1: 0, y2: 0, y3: 0 });
    setMetricResult({ evklidResult: 0, mistoResult: 0, chebyshevResult: 0 });
    messageApi.open({
      type: "warning",
      content: "Координати та розрахунки очищено!",
    });
  };

  return (
    <React.Fragment>
      {contextHolder}
      <div className="metric-calculator">
        <h2 className="">Калькулятор метрик обчислення відстані</h2>
        <h3>Розробив студент групи П-121-22-5-Пі Бойков А.Д.</h3>
        <table>
          <thead>
            <tr>
              <th>Вектори</th>
              <th>Координати X1;Y1</th>
              <th>Координати X2;Y2</th>
              <th>Координати X3;Y3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }}>
                <strong>Вектор 1</strong>
              </td>
              <td>
                <div className="inner-content">
                  <label htmlFor="input1">X1</label>
                  <input
                    value={firstVector.x1}
                    onChange={handleFirstVectorChange}
                    name="x1"
                    type="number"
                    id="input1"
                  ></input>
                </div>
              </td>
              <td>
                <div className="inner-content">
                  <label htmlFor="input2">X2</label>
                  <input
                    value={firstVector.x2}
                    onChange={handleFirstVectorChange}
                    name="x2"
                    type="number"
                    id="input2"
                  ></input>
                </div>
              </td>
              <td>
                <div className="inner-content">
                  <label htmlFor="input3">X3</label>
                  <input
                    value={firstVector.x3}
                    onChange={handleFirstVectorChange}
                    name="x3"
                    type="number"
                    id="input3"
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>
                <strong>Вектор 2</strong>
              </td>
              <td>
                <div className="inner-content">
                  <label htmlFor="input4">Y1</label>
                  <input
                    value={secondVector.y1}
                    onChange={handleSecondVectorChange}
                    name="y1"
                    type="number"
                    id="input4"
                  ></input>
                </div>
              </td>
              <td>
                <div className="inner-content">
                  <label htmlFor="input5">Y2</label>
                  <input
                    value={secondVector.y2}
                    onChange={handleSecondVectorChange}
                    name="y2"
                    type="number"
                    id="input5"
                  ></input>
                </div>
              </td>
              <td>
                <div className="inner-content">
                  <label htmlFor="input6">Y3</label>
                  <input
                    value={secondVector.y3}
                    onChange={handleSecondVectorChange}
                    name="y3"
                    type="number"
                    id="input6"
                  ></input>
                </div>
              </td>
            </tr>
            <tr style={{ fontSize: "20px" }}>
              <td style={{ textAlign: "center" }}>
                <h4>Розрахунки</h4>
              </td>
              <td style={{ textAlign: "center" }}>
                Метрика Евкліда: {metricResult.evklidResult}
              </td>
              <td style={{ textAlign: "center" }}>
                Метрика міста: {metricResult.mistoResult}
              </td>
              <td style={{ textAlign: "center" }}>
                Метрика Чебишева: {metricResult.chebyshevResult}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="calculate_container">
          <button onClick={() => handleComputeMetrics()}>Обрахувати</button>
          <button onClick={() => handleClearAll()}>Очистити</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Task1;
