import React, { useRef } from 'react';
import { For, block } from 'million/react';
import { useVirtualizer } from '@tanstack/react-virtual';

const lotsOfElements = Array.from({ length: 5000 }, (_, i) => <div>{i}</div>);

export function MillionApp() {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: `400px`,
          overflow: 'auto',
        }}
      >
        <For
          each={rowVirtualizer.getVirtualItems()}
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
          as="div"
        >
          {(virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                fontSize: '20px',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              Row {virtualItem.index}
              <div hidden>{...lotsOfElements}</div>
            </div>
          )}
        </For>
      </div>
    </>
  );
}

export function ReactApp() {
  const parentRef = useRef();

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: `400px`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                fontSize: '20px',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              Row {virtualItem.index}
              <div hidden>{...lotsOfElements}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// export default App;
