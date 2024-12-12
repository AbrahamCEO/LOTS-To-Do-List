import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { folderStore } from '../stores/FolderStore';
import { themeStore } from '../stores/ThemeStore';
import {
    Inbox,
    Calendar,
    FolderPlus,
    Sun,
    Moon,
    CheckSquare,
    Plus,
    Minus
} from 'lucide-react';
import AddFolderDialog from './dialogs/AddFolderDialog';

const Sidebar = observer(() => {
    const [isAddFolderOpen, setIsAddFolderOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for toggling sidebar

    return (
        <div
            className={`${isSidebarOpen ? 'w-64' : 'w-16'} h-screen bg-gray-800 dark:bg-gray-900 border-r border-gray-700 p-4 transition-all duration-300 ease-in-out relative`}
        >
            {/* Toggle Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="absolute -right-6 top-4 text-white p-2 rounded-lg bg-gray-700 hover:bg-gray-600 shadow-md"
            >
                {isSidebarOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
            </button>

            <div className="flex flex-col h-full">
                <div className="space-y-2">
                    <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg">
                        <Inbox className="h-5 w-5" />
                        {isSidebarOpen && <span>Inbox</span>}
                    </button>
                    <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg">
                        <Calendar className="h-5 w-5" />
                        {isSidebarOpen && <span>Upcoming</span>}
                    </button>
                    <button className="w-full flex items-center space-x-2 px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg">
                        <CheckSquare className="h-5 w-5" />
                        {isSidebarOpen && <span>Completed</span>}
                    </button>
                </div>

                <div className="mt-8">
                    <div className="flex items-center justify-between mb-2">
                        {isSidebarOpen && (
                            <h3 className="text-sm font-semibold text-gray-400">Folders</h3>
                        )}
                        <button
                            onClick={() => setIsAddFolderOpen(true)}
                            className="p-1 hover:bg-gray-700 rounded"
                        >
                            <FolderPlus className="h-4 w-4 text-gray-400" />
                        </button>
                    </div>
                    <div className="space-y-1">
                        {folderStore.folders.map((folder) => (
                            <button
                                key={folder.id}
                                className="w-full flex items-center space-x-2 px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                            >
                                {isSidebarOpen && <span>{folder.name}</span>}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-auto">
                    <button
                        onClick={() => themeStore.toggleTheme()}
                        className="w-full flex items-center space-x-2 px-4 py-2 text-gray-200 hover:bg-gray-700 rounded-lg"
                    >
                        {themeStore.isDark ? (
                            <>
                                <Sun className="h-5 w-5" />
                                {isSidebarOpen && <span>Light Mode</span>}
                            </>
                        ) : (
                            <>
                                <Moon className="h-5 w-5" />
                                {isSidebarOpen && <span>Dark Mode</span>}
                            </>
                        )}
                    </button>
                </div>
            </div>

            {isAddFolderOpen && (
                <AddFolderDialog
                    isOpen={isAddFolderOpen}
                    onClose={() => setIsAddFolderOpen(false)}
                />
            )}
        </div>
    );
});

export default Sidebar;