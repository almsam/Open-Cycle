import { Card } from "@/components/ui/card";

interface Props {
  className?: string;
  // any props that come into the component
}

function Legend({ className }: Props) {
  return (
    <Card className={className}>
      <div id="legend" className="ml-2 place-items-start">
        <span className="today"> Today</span>
        <span className="previous"> Previous Cycle</span>
        <span className="next"> Next Cycle</span>
        <span className="note"> Day with a Note</span>
      </div>
    </Card>
  );
}

export { Legend };
