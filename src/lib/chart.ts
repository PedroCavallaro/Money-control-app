import { ApexOptions } from "apexcharts";

export const fixedOptions: ApexOptions = {
    title: {
        text: "Fixos",
        style: {
            color: "#FFF",
            fontFamily: "Inter, Arial",
            fontWeight: 200,
        },
    },

    noData: { text: "No Data" },
    labels: ["Entrada Fixa", "Gasto Fixo", "Gasto de lazer"],
    colors: ["#80EF11", "#FF0303", "#FFCC19"],
    stroke: {
        show: false,
    },
    legend: {
        labels: {
            colors: ["#FFF", "#FFF", "#FFF"],
        },
    },
    fill: {
        type: "gradient",
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        fontSize: "12px",
                    },
                    value: {
                        show: true,
                        formatter: (val) => {
                            return new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(val));
                        },
                        fontSize: "12px",
                        color: "#FFF",
                    },
                },
            },
        },
    },
};

export const relativeOptions: ApexOptions = {
    title: {
        text: "Relativo",
        style: {
            color: "#FFF",
            fontFamily: "Inter, Arial",
            fontWeight: 200,
        },
    },
    noData: { text: "No Data" },
    labels: ["Entradas", "Gastos"],
    colors: ["#80EF11", "#FF0303"],
    stroke: {
        show: false,
    },
    fill: {
        type: "gradient",
    },

    legend: {
        labels: {
            colors: ["#FFF", "#FFF"],
        },
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    value: {
                        show: true,
                        color: "#FFF",
                        formatter: (val) => {
                            return new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(val));
                        },
                        fontSize: "12px",
                    },
                    name: {
                        fontSize: "12px",
                    },
                    total: {
                        color: "#FFF",
                    },
                },
            },
        },
    },
};
