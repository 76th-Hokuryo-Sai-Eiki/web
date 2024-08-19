import { random, sample, uniqueId } from "lodash-es";
import { useRef } from "react";
import DraggableGrid, { DraggableGridHandle } from "ruuri";
import "./styles.css";

const COLOR = ["#c04851", "#806d9e", "#35333c", "#b2cf87"];
const SIZE_RANGE = [100, 200];
const ITEM_COUNT = 5;

export default function RuuriTest() {
    const ref = useRef<DraggableGridHandle>(null);

    return (
        <div className="ruuri">
            <DraggableGrid
                ref={ref}
                className="grid"
                data={[...Array(ITEM_COUNT)].map((_, index) => ({
                    id: `00-${index}`,
                }))}
                layout={{
                    fillGaps: true,
                }}
                renderItem={() => {
                    const color = sample(COLOR);

                    return (
                        <div
                            key={uniqueId("draggable-item")}
                            className="grid-item"
                            style={{
                                backgroundColor: color,
                                width: `${random(SIZE_RANGE[0], SIZE_RANGE[1])}px`,
                                height: `${random(SIZE_RANGE[0], SIZE_RANGE[1])}px`,
                            }}
                        >
                            {color}
                        </div>
                    );
                }}
            />
        </div>
    );
}
