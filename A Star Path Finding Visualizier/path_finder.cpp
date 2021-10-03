#include "math.h"
#include <array>
#include <chrono>
#include <cstring>
#include <iostream>
#include <queue>
#include <set>
#include <stack>
#include <tuple>
using namespace std;

typedef pair<int, int> Pair;
typedef tuple<double, int, int> Tuple;

struct cell {
	Pair parent;
	double f, g, h;
	cell()
		: parent(-1, -1)
		, f(-1)
		, g(-1)
		, h(-1)
	{
	}
};

// A Utility Function to check whether given cell (row, col)
// is a valid cell or not.
template <size_t ROW, size_t COL>
bool isValid(const array<array<int, COL>, ROW>& grid,
			const Pair& point)
{ // Returns true if row number and column number is in
	if (ROW > 0 && COL > 0)
		return (point.first >= 0) && (point.first < ROW)
			&& (point.second >= 0)
			&& (point.second < COL);

	return false;
}

// A Utility Function to check whether the given cell is
// blocked or not
template <size_t ROW, size_t COL>
bool isUnBlocked(const array<array<int, COL>, ROW>& grid,
				const Pair& point)
{
	// Returns true if the cell is not blocked else false
	return isValid(grid, point)
		&& grid[point.first][point.second] == 1;
}

// A Utility Function to check whether destination cell has
// been reached or not
bool isDestination(const Pair& position, const Pair& dest)
{
	return position == dest;
}

// A Utility Function to calculate the 'h' heuristics.
double calculateHValue(const Pair& src, const Pair& dest)
{
	// h is estimated with the two points distance formula
	return sqrt(pow((src.first - dest.first), 2.0)
				+ pow((src.second - dest.second), 2.0));
}

// A Utility Function to trace the path from the source to
// destination
template <size_t ROW, size_t COL>
void tracePath(
	const array<array<cell, COL>, ROW>& cellDetails,
	const Pair& dest)
{
	printf("\nThe Path is ");

	stack<Pair> Path;

	int row = dest.second;
	int col = dest.second;
	Pair next_node = cellDetails[row][col].parent;
	do {
		Path.push(next_node);
		next_node = cellDetails[row][col].parent;
		row = next_node.first;
		col = next_node.second;
	} while (cellDetails[row][col].parent != next_node);

	Path.emplace(row, col);
	while (!Path.empty()) {
		Pair p = Path.top();
		Path.pop();
		printf("-> (%d,%d) ", p.first, p.second);
	}
}

template <size_t ROW, size_t COL>
void aStarSearch(const array<array<int, COL>, ROW>& grid,
				const Pair& src, const Pair& dest)
{
	// If the source is out of range
	if (!isValid(grid, src)) {
		printf("Source is invalid\n");
		return;
	}

	// If the destination is out of range
	if (!isValid(grid, dest)) {
		printf("Destination is invalid\n");
		return;
	}

	// Either the source or the destination is blocked
	if (!isUnBlocked(grid, src)
		|| !isUnBlocked(grid, dest)) {
		printf("Source or the destination is blocked\n");
		return;
	}

	// If the destination cell is the same as source cell
	if (isDestination(src, dest)) {
		printf("We are already at the destination\n");
		return;
	}

	bool closedList[ROW][COL];
	memset(closedList, false, sizeof(closedList));

	// Declare a 2D array of structure to hold the details
	// of that cell
	array<array<cell, COL>, ROW> cellDetails;

	int i, j;
	// Initialising the parameters of the starting node
	i = src.first, j = src.second;
	cellDetails[i][j].f = 0.0;
	cellDetails[i][j].g = 0.0;
	cellDetails[i][j].h = 0.0;
	cellDetails[i][j].parent = { i, j };

	std::priority_queue<Tuple, std::vector<Tuple>,
						std::greater<Tuple> >
		openList;

	// Put the starting cell on the open list and set its
	// 'f' as 0
	openList.emplace(0.0, i, j);

	// We set this boolean value as false as initially
	// the destination is not reached.
	while (!openList.empty()) {
		const Tuple& p = openList.top();
		// Add this vertex to the closed list
		i = get<1>(p); // second element of tupla
		j = get<2>(p); // third element of tupla

		// Remove this vertex from the open list
		openList.pop();
		closedList[i][j] = true;
		/*
				Generating all the 8 successor of this cell
						N.W N N.E
						\ | /
						\ | /
						W----Cell----E
								/ | \
						/ | \
						S.W S S.E

				Cell-->Popped Cell (i, j)
				N --> North	 (i-1, j)
				S --> South	 (i+1, j)
				E --> East	 (i, j+1)
				W --> West		 (i, j-1)
				N.E--> North-East (i-1, j+1)
				N.W--> North-West (i-1, j-1)
				S.E--> South-East (i+1, j+1)
				S.W--> South-West (i+1, j-1)
		*/
		for (int add_x = -1; add_x <= 1; add_x++) {
			for (int add_y = -1; add_y <= 1; add_y++) {
				Pair neighbour(i + add_x, j + add_y);

				if (isValid(grid, neighbour)) {

					if (isDestination(
							neighbour,
							dest)) { // Set the Parent of
									// the destination cell
						cellDetails[neighbour.first]
								[neighbour.second]
									.parent
							= { i, j };
						printf("The destination cell is "
							"found\n");
						tracePath(cellDetails, dest);
						return;
					}
					// If the successor is already on the
					// closed list or if it is blocked, then
					// ignore it. Else do the following
					else if (!closedList[neighbour.first]
										[neighbour.second]
							&& isUnBlocked(grid,
											neighbour)) {
						double gNew, hNew, fNew;
						gNew = cellDetails[i][j].g + 1.0;
						hNew = calculateHValue(neighbour,
											dest);
						fNew = gNew + hNew;

							if (cellDetails[neighbour.first]
									[neighbour.second]
										.f
								== -1
							|| cellDetails[neighbour.first]
										[neighbour.second]
											.f
								> fNew) {
							openList.emplace(
								fNew, neighbour.first,
								neighbour.second);

							// Update the details of this
							// cell
							cellDetails[neighbour.first]
									[neighbour.second]
										.g
								= gNew;
							cellDetails[neighbour.first]
									[neighbour.second]
										.h
								= hNew;
							cellDetails[neighbour.first]
									[neighbour.second]
										.f
								= fNew;
							cellDetails[neighbour.first]
									[neighbour.second]
										.parent
								= { i, j };
						}
					}
				}
			}
		}
	}

	printf("Failed to find the Destination Cell\n");
}

// Driver program to test above function
int main()
{
	/* Description of the Grid-
	1--> The cell is not blocked
	0--> The cell is blocked */
	array<array<int, 10>, 9> grid{
		{ { { 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 } },
		{ { 1, 1, 1, 0, 1, 1, 1, 0, 1, 1 } },
		{ { 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 } },
		{ { 0, 0, 1, 0, 1, 0, 0, 0, 0, 1 } },
		{ { 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 } },
		{ { 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 } },
		{ { 1, 0, 0, 0, 0, 1, 0, 0, 0, 1 } },
		{ { 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 } },
		{ { 1, 1, 1, 0, 0, 0, 1, 0, 0, 1 } } }
	};

	// Source is the left-most bottom-most corner
	Pair src(8, 0);

	// Destination is the left-most top-most corner
	Pair dest(0, 0);

	aStarSearch(grid, src, dest);

	return 0;
}
