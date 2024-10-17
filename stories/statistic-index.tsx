import React from "react";
import { Statistic } from "@/registry/default/ui/statistic";
import { Button } from "@/registry/default/ui/button";

type StatisticNormalProps = {
    title: string;
    value: number;
    precision?: number;
    loading?: boolean;
    buttonText?: string;
};

const StatisticNormal: React.FC<StatisticNormalProps> = ({
                                                             title = "Active Users",
                                                             value = 112893,
                                                             precision = 0,
                                                             loading = false,
                                                             buttonText = "Recharge",
                                                         }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Statistic title={title} value={value} precision={precision} />
                <div style={{ width: "130px" }} />
                <Statistic title="Account Balance (CNY)" value={value} precision={2} />
            </div>
            <div style={{ height: "70px" }} />
            <Statistic title={title} value={value} loading={loading} />
            <div
                style={{
                    marginTop: "-90px",
                    marginLeft: "220px",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                }}
            >
                <Button>{buttonText}</Button>
            </div>
        </div>
    );
};

export default StatisticNormal;
