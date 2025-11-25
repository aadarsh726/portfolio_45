import React, { useEffect, useRef } from 'react';

const UnicornCanvas = ({ projectId, width = '100%', height = '100%', className = '', style = {} }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // User provided script logic wrapped in useEffect
        const loadUnicornScript = () => {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js";
                script.onload = function () {
                    if (!window.UnicornStudio.isInitialized) {
                        window.UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                    }
                };
                (document.head || document.body).appendChild(script);
            } else {
                // If already loaded, just init
                if (window.UnicornStudio.init) {
                    window.UnicornStudio.init();
                }
            }
        };

        loadUnicornScript();

        // Cleanup not strictly possible with this global lib, but we can try to avoid duplicates
    }, [projectId]);

    return (
        <div
            ref={containerRef}
            data-us-project={projectId}
            className={className}
            style={{
                width,
                height,
                ...style
            }}
        />
    );
};

export default UnicornCanvas;
